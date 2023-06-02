import { assert } from '@silverhand/essentials';

import type {
  GetConnectorConfig,
  CreateConnector,
  EmailConnector,
  SendMessageFunction,
} from '@logto/connector-kit';
import {
  ConnectorError,
  ConnectorErrorCodes,
  validateConfig,
  ConnectorType,
} from '@logto/connector-kit';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

import { defaultMetadata } from './constant.js';
import type { SmtpConfig } from './types.js';
import { ContextType, smtpConfigGuard } from './types.js';

const sendMessage =
  (getConfig: GetConnectorConfig): SendMessageFunction =>
  async (data, inputConfig) => {
    const { to, type, payload } = data;
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig<SmtpConfig>(config, smtpConfigGuard);
    const template = config.templates.find((template) => template.usageType === type);

    assert(
      template,
      new ConnectorError(ConnectorErrorCodes.TemplateNotFound, {
        message: `Template not found for type: ${type}`,
        data: config.templates,
      })
    );

    const configOptions: SMTPTransport.Options = config;

    const transporter = nodemailer.createTransport(configOptions);

    const contentsObject = parseContents(
      typeof payload.code === 'string'
        ? template.content.replace(/{{\s*code\s*}}/g, payload.code)
        : template.content,
      template.contentType
    );

    const mailOptions = {
      to,
      from: config.fromEmail,
      replyTo: config.replyTo,
      subject: template.subject.replace(/{{\s*code\s*}}/g, payload.code),
      ...contentsObject,
    };

    try {
      return await transporter.sendMail(mailOptions);
    } catch (error: unknown) {
      throw new ConnectorError(ConnectorErrorCodes.General, { data: error });
    }
  };

const parseContents = (contents: string, contentType: ContextType) => {
  switch (contentType) {
    case ContextType.Text: {
      return { text: contents };
    }
    case ContextType.Html: {
      return { html: contents };
    }
    default: {
      throw new ConnectorError(ConnectorErrorCodes.InvalidConfig, {
        message: '`contentType` should be ContextType.',
        data: contentType,
      });
    }
  }
};

const createSmtpConnector: CreateConnector<EmailConnector> = async ({ getConfig }) => {
  return {
    metadata: defaultMetadata,
    type: ConnectorType.Email,
    configGuard: smtpConfigGuard,
    sendMessage: sendMessage(getConfig),
  };
};

export default createSmtpConnector;

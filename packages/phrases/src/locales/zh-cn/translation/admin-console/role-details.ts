const role_details = {
  back_to_roles: '返回角色',
  identifier: '标识符',
  delete_description:
    '这样做将从受影响的用户中删除与该角色关联的权限，并删除角色、用户和权限之间的映射关系。',
  role_deleted: '{{name}} 已成功删除。',
  general_tab: '常规',
  users_tab: '用户',
  m2m_apps_tab: '机器对机器应用',
  permissions_tab: '权限',
  settings: '设置',
  settings_description:
    '角色是一组权限，可以分配给用户。它们还提供了一种聚合不同 API 定义的权限的方法，使得添加、删除或调整权限比将其单独分配给用户更有效率。',
  field_name: '名称',
  field_description: '描述',
  field_is_default: '默认角色',
  field_is_default_description:
    '将此角色设为新用户的默认角色。可以设置多个默认角色。这也会影响通过管理 API 创建的用户的默认角色。',
  type_m2m_role_tag: '机器对机器应用角色',
  type_user_role_tag: '用户角色',
  permission: {
    assign_button: '分配权限',
    assign_title: '分配权限',
    assign_subtitle: '将权限分配给此角色。角色将获得添加的权限，具有此角色的用户将继承这些权限。',
    assign_form_field: '分配权限',
    added_text_one: '添加了 {{count, number}} 个权限',
    added_text_other: '添加了 {{count, number}} 个权限',
    api_permission_count_one: '{{count, number}} 个权限',
    api_permission_count_other: '{{count, number}} 个权限',
    confirm_assign: '分配权限',
    permission_assigned: '所选的权限已成功分配给此角色',
    deletion_description: '如果删除此权限，则具有此角色的受影响用户将失去此权限授予的访问权限。',
    permission_deleted: '权限 {{name}} 已成功从此角色中删除',
    empty: '无可用权限',
  },
  users: {
    assign_button: '分配用户',
    name_column: '用户',
    app_column: '应用',
    latest_sign_in_column: '最近登录',
    delete_description: '它将保留在你的用户池中，但失去此角色的授权。',
    deleted: '{{name}} 已成功从此角色中删除',
    assign_title: '分配用户',
    assign_subtitle: '将用户分配给此角色。通过搜索名称、电子邮件、电话或用户 ID 查找适当的用户。',
    assign_field: '分配用户',
    confirm_assign: '分配用户',
    assigned_toast_text: '所选的用户已成功分配给此角色',
    empty: '无可用用户',
  },
  applications: {
    assign_button: '分配应用',
    name_column: '应用',
    app_column: '应用',
    description_column: '描述',
    delete_description: '应用将保留在你的应用池中，但将失去此角色的授权。',
    deleted: '{{name}} 已成功从此角色中删除',
    assign_title: '分配应用',
    assign_subtitle: '将应用分配给此角色。通过搜索名称、描述或应用 ID 查找适当的应用。',
    assign_field: '分配应用',
    confirm_assign: '分配应用',
    assigned_toast_text: '所选的应用已成功分配给此角色',
    empty: '无可用应用',
  },
};

export default Object.freeze(role_details);

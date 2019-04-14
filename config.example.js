{
    // Your bot token (contact @BotFather to get one) goes here
    "token": "",
    // Group id, "*" for default settings
    "*": {
        // This message is sent when bot is invited to a group
        "msg_self_introduction": "大家好，感谢使用本机器人。\n\n我负责自动禁止新成员发言，赋予我群管中的 Ban users 权限即可开始使用，移除权限即可停用。新用户加群时我会自动将其禁言，需要发言的用户则由管理员手动允许发言。",
        /* The message is sent when someone joins the group,
        please replace the challenge question with {challenge}
        and replace the maximum challenge time with {timeout} */
        "msg_challenge_not_for_you": "这次验证并不针对您",
        "msg_challenge": "您好，本群缺省禁止发言，唯管理员可手动允许有需要的用户发言。",
        "msg_challenge_passed": "您已通过验证，欢迎加入本群！\n如果仍然无法发言，请重启 Telegram 客户端。",
        "msg_challenge_mercy_passed": "虽然您答错了问题，但我们仍然认为您是人类，欢迎加入本群！\n如果仍然无法发言，请重启 Telegram 客户端。\n\nWelcome to this group! You chose a wrong button but we still recognize you as a human.\nIf you cannot send messages, please restart the Telegram client.",
        "msg_challenge_failed": "抱歉，此用户已入群超过一天而没有管理员允许发言。如需要允许用户发言，请手动设置。",
        "msg_approve_manually": "人工通过",
        "msg_refuse_manually": "人工拒绝",
        "msg_permission_denied": "您的权限不足",
        "msg_bot_no_permission": "操作失败，可能是机器人的权限不足",
        "msg_approved": "您已被管理员 {user} 人工通过，欢迎加入本群！\n\nWelcome to this group! You were approved by {user} manually.",
        "msg_refused": "该用户已被管理员 {user} 移除出群。\n\nThe user has been removed from group by {user}.",
        "challenge_timeout": 86400,
        "challenge_timeout_action": "restrict",
        // Delete challenges or not after the interval in seconds
        "delete_passed_challenge": true,
        "delete_passed_challenge_interval": 15,
        "delete_failed_challenge": false,
        "delete_failed_challenge_interval": 180
    }
}
# Your bot token (contact @BotFather to get one) goes here
token = ''
msg = {
    # The message to be sent when someone joins the group,
    # please replace the challenge question with {challenge}
    # and replace the maximum challenge time with {timeout}
    'challenge': '您好，本群缺省禁止发言，唯管理员可手动允许有需要的用户发言。',
    'challenge_succeed': '您已通过验证，欢迎加入本群！\n如果仍然无法发言，请重启 Telegram 客户端。',
    'challenge_mercy_succeed': ('虽然您答错了问题，但我们仍然认为您是人类，欢迎加入本群！\n'
        '如果仍然无法发言，请重启 Telegram 客户端。'),
    'challenge_failed': '抱歉，此用户已入群超过一天而没有管理员允许发言。如需要允许用户发言，请手动设置。'
}
# The maximum challenge time in seconds.
# If there are no response in this time, the user will be restricted/banned
challenge_timeout = 86400
# What to do when a user failed the challenge
# the value can be 'restrict' or 'ban'
challenge_timeout_action = 'restrict'

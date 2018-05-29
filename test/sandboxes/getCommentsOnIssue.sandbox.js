const getCommentsOnIssue = require('../../lib/github-api/getCommentsOnIssue')

module.exports = async context => {
  const result = await getCommentsOnIssue(context, {
    owner: 'itaditya',
    repo: 'gh-app-test-repo',
    issueNum: 1
  })
  const { data: comments } = result
  console.log('First Comment: \n', comments[0])
}
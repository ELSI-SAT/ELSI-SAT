
// Contact
let data = {

}

// GET : Emails
mock.onGet("api/apps/email/mails").reply((request) => {

  const filter = request.params.filter

  const filteredEmails = data.emails.filter((email)=> {

    if (filter == "inbox") return email.mailFolder === "inbox"
    if (filter === "answered") return email.mailFolder === "answered"
    if (filter === "draft") return email.mailFolder === "draft"
    if (filter === "starred") return email.isStarred && email.mailFolder !== "trash"
    if (filter === "trash") return email.mailFolder === "trash"
    else return email.mailFolder != "trash" && email.labels.includes(filter)

  }).reverse()

  return [200, JSON.parse(JSON.stringify(filteredEmails))]
})

// GET : Emails
mock.onGet("api/apps/email/tags").reply(() => {
  return [200, data.mailTags]
})

// GET : Unread Mails
mock.onGet("/api/apps/email/meta").reply(() => {

  let countUnreadMailFolders = ["inbox"]

  let meta = {
    unreadMails: {
      folder: {},
      label: {}
    },
    draftMails: []
  }

  data.emails.forEach((mail) => {

    // Count unread mails
    if(mail.unread) {

      // Add mail id
      if(countUnreadMailFolders.includes(mail.mailFolder)) {
        meta.unreadMails.folder[mail.mailFolder] ? meta.unreadMails.folder[mail.mailFolder].push(mail.id) : meta.unreadMails.folder[mail.mailFolder] = [mail.id]
      }

      // Add mail id
      mail.labels.forEach((label) => {
        meta.unreadMails.label[label] ? meta.unreadMails.label[label].push(mail.id) : meta.unreadMails.label[label] = [mail.id]
      })
    }

    // Get draft mail count
    if(mail.mailFolder === "draft") meta.draftMails.push(mail.id)
  })

  return [200, meta]
})



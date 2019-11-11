
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
  return [200, data.emailTags]
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



// POST : Update Mails Labels
mock.onPost("/api/apps/email/update-labels").reply((request) => {

  const label = JSON.parse(request.data).label
  const mailsToUpdate = JSON.parse(request.data).emailIds

  mailsToUpdate.forEach((mailId) => {
    const mailIndex = data.emails.findIndex((mail) => mail.id == mailId)
    const labelIndex = data.emails[mailIndex].labels.indexOf(label)

    if(labelIndex == -1) {
        data.emails[mailIndex].labels.push(label)
    }else{
        data.emails[mailIndex].labels.splice(labelIndex, 1)
    }
  })

  return [200]
})

// POST : Mark as Unread
mock.onPost("/api/apps/email/mark-unread").reply((request) => {
  const mailsToUpdate = JSON.parse(request.data).emailIds

  mailsToUpdate.forEach((mailId) => {
    const mailIndex = data.emails.findIndex((mail) => mail.id == mailId)
    data.emails[mailIndex].unread = JSON.parse(request.data).unreadFlag
  })

  return [200]
})



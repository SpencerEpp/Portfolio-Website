function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Honeypot trap: if filled, it's a bot
  var honeypot = e.parameter.honeypot || "";
  if (honeypot.trim() !== "") {
    return ContentService.createTextOutput("Spam detected").setMimeType(ContentService.MimeType.TEXT);
  }

  var timestamp = new Date();
  var name = e.parameter.name;
  var email = e.parameter.email;
  var subject = e.parameter.subject;
  var message = e.parameter.message;
  var source = e.parameter.source;

  // Limit message length (prevent huge spam dumps)
  if (message.length > 3000) {
    return ContentService.createTextOutput("Message too long").setMimeType(ContentService.MimeType.TEXT);
  }

  // Rate limiting: reject if submitted within 10 seconds of previous
  var data = sheet.getDataRange().getValues();
  if (data.length > 1) {
    var lastTime = new Date(data[data.length - 1][0]);
    var now = new Date();
    if ((now - lastTime) / 1000 < 10) {
      return ContentService.createTextOutput("Too many requests").setMimeType(ContentService.MimeType.TEXT);
    }
  }

  // Append row in correct order
  sheet.appendRow([timestamp, name, email, subject, message, source]);

  // Send email notification
  MailApp.sendEmail({
    to: "email@gmail.com",
    subject: `New Portfolio Contact: ${subject}`,
    replyTo: email,
    htmlBody:
      `<b>Name:</b> ${name}<br>` +
      `<b>Email:</b> ${email}<br>` +
      `<b>Subject:</b> ${subject}<br>` +
      `<b>Message:</b><br>${message}<br><br>` +
      `<b>Found portfolio via:</b> ${source}`
  });

  return ContentService.createTextOutput("success").setMimeType(ContentService.MimeType.TEXT);
}

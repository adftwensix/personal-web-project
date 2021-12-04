function submitForm(){
    let name = document.getElementById('input-name').value
    console.log(name)

    let mail = document.getElementById('input-email').value
    console.log(mail)

    let number = document.getElementById('input-phone-number').value
    console.log(number)

    let subject = document.getElementById('input-subject').value
    console.log(subject)

    let message = document.getElementById('input-your-message').value
    console.log(message)
    
    if( name == ''){
        alert("Nama Harus Di Isi")
    } else if( mail == ''){
        alert("Email Harus Di Isi")
    } else if( number == ''){
        alert("Nomor HP Harus Di Isi")
    } else if( subject == ''){
        alert("Subject Harus Di Isi")
    } else if( message == ''){
        alert("Pesan Harus Di Isi")
    }

   let receiverMail = 'adf.ailsa@mail.com'
   let a = document.createElement('a')
   a.href = 'mailto:' + receiverMail + '?subject=' + subject + '&body=Halo Nama Saya ' + name + ', ' + message
   a.click()
}
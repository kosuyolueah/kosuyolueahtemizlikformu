
        function handleLogin(event) {
            event.preventDefault(); // Formun varsayılan davranışını engelle (sayfayı yenileme)

            // Formdan verileri al
            var fullName = document.getElementById("fullName").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Tarih ve saati al
            var now = new Date();
            var dateTime = now.toLocaleString();

            // Konsola bilgileri yazdır
            console.log("Ad ve Soyad: " + fullName);
            console.log("Kullanıcı Adı: " + username);
            console.log("Şifre: " + password);
            console.log("Tarih ve Saat: " + dateTime);

            // Kullanıcı adı ve şifre kontrolü
            if (username === "admin" && password === "123456") {
                // Başarılı giriş durumunda başka bir sayfaya yönlendir
                window.location.href = "birimler.html"; 
                return false; // Yönlendirme işlemi için formun gönderilmesini engelle
            } else {
                // Hata mesajını göster
                document.getElementById("errorMessage").style.display = "block";
                return false; // Formun gönderilmesini engelle
            }
        }

      const uttarakhandData = {
        अल्मोड़ा: ["अल्मोड़ा", "सोमेश्वर (अनुसूचित जाति)", "साल्ट", "जागेश्वर"],
        बागेश्वर: ["बागेश्वर (अनुसूचित जाति)", "कपकोट"],
        चमोली: ["बद्रीनाथ", "जोशीमठ", "थराली (अनुसूचित जाति)"],
        चंपावत: ["चंपावत", "लोहाघाट"],
        देहरादून: [
          "मसूरी",
          "राजपुर रोड",
          "देहरादून कैंटोनमेंट",
          "विकासनगर",
          "सहसपुर",
          "डोईवाला",
          "ऋषिकेश",
        ],
        हरिद्वार: [
          "हरिद्वार",
          "ज्वालापुर (अनुसूचित जाति)",
          "भेल रानीपुर",
          "हरिद्वार ग्रामीण",
          "लक्सर",
          "खानपुर",
          "मंगलौर",
          "पीरन कलियर",
        ],
        नैनीताल: [
          "लालकुआं",
          "भीमताल",
          "नैनीताल",
          "हल्द्वानी",
          "कालाढूंगी",
          "रामनगर",
        ],
        "पौड़ी गढ़वाल": [
          "श्रीनगर",
          "चौबट्टाखाल",
          "धूमाकोट",
          "लैंसडाउन",
          "कोटद्वार",
          "यमकेश्वर",
        ],
        पिथौरागढ़: [
          "पिथौरागढ़",
          "डीडीहाट",
          "गंगोलीहाट (अनुसूचित जाति)",
          "धारचूला",
        ],
        रुद्रप्रयाग: ["रुद्रप्रयाग", "केदारनाथ"],
        "टिहरी गढ़वाल": [
          "प्रतापनगर",
          "टिहरी",
          "नरेंद्रनगर",
          "धनोल्टी",
          "घनसाली (अनुसूचित जाति)",
        ],
        "उधम सिंह नगर": [
          "सितारगंज",
          "नानपारा",
          "काशीपुर",
          "किच्छा",
          "बाजपुर (अनुसूचित जाति)",
          "गदरपुर",
          "रुद्रपुर",
          "खटीमा",
          "जसपुर",
        ],
        उत्तरकाशी: ["पुरोला (अनुसूचित जाति)", "गंगोत्री", "यमुनोत्री"],
      };

      const districtSelect = document.getElementById("district");
      Object.keys(uttarakhandData).forEach((district) => {
        const opt = document.createElement("option");
        opt.value = district;
        opt.textContent = district;
        districtSelect.appendChild(opt);
      });

      // Populate Vidhan Sabha based on district selection
      districtSelect.addEventListener("change", function () {
        const vidhanSabhaSelect = document.getElementById("vidhanSabha");
        vidhanSabhaSelect.innerHTML =
          '<option value="">Select Vidhan Sabha</option>';

        if (this.value && uttarakhandData[this.value]) {
          uttarakhandData[this.value].forEach((vs) => {
            const opt = document.createElement("option");
            opt.value = vs;
            opt.textContent = vs;
            vidhanSabhaSelect.appendChild(opt);
          });
        }
      });
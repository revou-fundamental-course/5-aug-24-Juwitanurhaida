function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
        document.querySelector('.bmi-value').textContent = bmi;

        let bmiCategory = '';
        let bmiAdvice = '';

        if (bmi < 18.5) {
            bmiCategory = 'Kekurangan berat badan';
            bmiAdvice = 'Anda memiliki BMI yang menunjukkan berat badan kurang. Ini berarti Anda mungkin perlu meningkatkan asupan nutrisi dengan makanan yang lebih bergizi dan seimbang 🍎🥗. Cobalah untuk menambahkan lebih banyak protein, karbohidrat kompleks, dan lemak sehat ke dalam diet Anda. Jangan ragu untuk berkonsultasi dengan profesional kesehatan 👩‍⚕️👨‍⚕️ untuk mendapatkan saran yang tepat dan rencana makan yang sesuai dengan kebutuhan.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = 'Berat badan ideal';
            bmiAdvice = 'Anda memiliki BMI yang menunjukkan berat badan normal. Ini adalah kabar baik! Pertahankan gaya hidup sehat dengan terus mengonsumsi makanan seimbang dan bergizi 💪🥗. Jangan lupa untuk tetap aktif dengan berolahraga secara teratur, seperti berjalan kaki, berlari, atau aktivitas fisik lainnya. Menjaga keseimbangan ini akan membantu Anda tetap sehat dan bugar 😊. Jika Anda memiliki pertanyaan atau butuh saran lebih lanjut, jangan ragu untuk berkonsultasi dengan profesional kesehatan 👩‍⚕️👨‍⚕️';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = 'Berat badan lebih';
            bmiAdvice = 'Anda memiliki BMI yang menunjukkan berat badan berlebih. Penting untuk mempertimbangkan perubahan gaya hidup sehat untuk mencapai berat badan yang lebih ideal. Mulailah dengan pola makan seimbang yang kaya akan sayuran, buah-buahan, dan protein tanpa lemak 🥦🏃‍♂️. Selain itu, cobalah untuk meningkatkan aktivitas fisik harian Anda, seperti berjalan kaki, bersepeda, atau olahraga lainnya. Konsultasikan dengan profesional kesehatan 👩‍⚕️👨‍⚕️ untuk mendapatkan saran yang tepat dan dukungan dalam perjalanan Anda menuju kesehatan yang lebih baik.';
        } else {
            bmiCategory = 'Obesitas';
            bmiAdvice = 'Anda memiliki BMI yang menunjukkan obesitas. Penting untuk mempertimbangkan perubahan gaya hidup sehat untuk mencapai berat badan yang lebih ideal. Mulailah dengan pola makan seimbang yang kaya akan sayuran, buah-buahan, dan protein tanpa lemak 🥦🏃‍♂️. Selain itu, cobalah untuk meningkatkan aktivitas fisik harian Anda, seperti berjalan kaki, bersepeda, atau olahraga lainnya. Konsultasikan dengan profesional kesehatan 👩‍⚕️👨‍⚕️ untuk mendapatkan saran yang tepat dan dukungan dalam perjalanan Anda menuju kesehatan yang lebih baik.';
        }
        
        document.querySelector('.bmi-category').textContent = bmiCategory;
        document.querySelector('.bmi-advice').textContent = bmiAdvice;
    } else {
        alert('Harap masukkan nilai berat dan tinggi badan yang valid.');
    }
}

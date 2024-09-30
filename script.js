// ボタンをクリックしたときのイベントを設定
document.getElementById('contactButton').addEventListener('click', function(event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
    alert('You clicked the Contact Me button!');
});
// フォームのバリデーション
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームの送信を防ぐ

    // フォームの要素を取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');

    // エラーメッセージをリセット
    errorMessage.textContent = '';

    // バリデーションのチェック
    if (name === '' || email === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    // メールアドレスの簡易チェック
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // バリデーションが成功した場合の処理
    alert('Form submitted successfully!');
    this.reset(); // フォームのリセット
});

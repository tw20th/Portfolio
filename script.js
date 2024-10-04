document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // 入力フィールドをリセットする関数
    const resetField = (input) => {
        input.classList.remove('error'); // エラースタイルを削除
    };

    // 入力フィールドにエラースタイルを適用する関数
    const setError = (input, message) => {
        alert(message); // エラーメッセージの表示
        input.classList.add('error'); // エラースタイルを追加
        console.log(`Error applied to: ${input.id}`); // デバッグ用にコンソールに出力
    };

    form.addEventListener('submit', (e) => {
        // フォームが有効かどうかのフラグ
        let isValid = true;

        // フィールドのスタイルをリセット
        resetField(nameInput);
        resetField(emailInput);
        resetField(messageInput);

        // 名前のチェック
        if (nameInput.value.trim() === '') {
            setError(nameInput, '名前を入力してください。');
            isValid = false;
        }

        // メールアドレスのチェック
        if (!emailInput.value.includes('@')) {
            setError(emailInput, '有効なメールアドレスを入力してください。');
            isValid = false;
        }

        // メッセージのチェック
        if (messageInput.value.trim() === '') {
            setError(messageInput, 'メッセージを入力してください。');
            isValid = false;
        }

        // フォームが無効な場合、送信をキャンセル
        if (!isValid) {
            e.preventDefault();
        }
    });
});

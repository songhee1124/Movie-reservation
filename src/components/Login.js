export default class Login{

    constructor(emailInput,passwordInput){
        this.emailInput = emailInput;
        this.passwordInput =passwordInput;
        this.render();
    }

    //값이 공백이 아닐경우, true를 리턴함/ 하나라도 false 가 나오면 false를 반환함.
    checkRequiredValueIsEnteredInField() { // 3
        return [this.emailInput, this.passwordInput].every(
            (input) => input.value !== ""
        );
    }

    //이메일 유효성 확인
    checkEmailFormat() {  // 1
        const re = /^[a-zA-Z0-9\.]+@[a-z0-9-_\.]+\.co$/; // 1 - 1
        const email = this.emailInput.value; // 1 - 2
        return re.test(email.trim()); // 1 - 3
    }

    //비밀번호 유효성 1 - 길이가 요구사항을 만족하는지 확인
    checkPasswordInputLength(minLength, maxLength) { // 1
        const passwordLength = this.passwordInput.value.length; 
        return !(passwordLength < minLength || passwordLength > maxLength);
    }

    //비밀번호 유효서2 -주어진 형식을 만족하는지 확인
    checkPasswordCombinationValidation() { // 2
        const re = /^(?=.*[a-zA-Z])(?=.*[!@~])(?=.*[0-9])[a-zA-Z0-9!@~]{8,20}$/;
        const password = this.passwordInput.value;
        return re.test(password);
    }

    render(){
        const validations=[
            {
                fn :this.checkRequiredValueIsEnteredInField ,
                errMsg : "아이디 혹은 비밀번호가 입력되지 않았습니다."
            },
            {
                fn : this.checkEmailFormat,
                errMsg : "이메일 형식이 올바르지 않습니다."
            },
            {
                fn: () => this.checkPasswordInputLength(8, 20),
                errMsg: "비밀번호는 최소 8자 이상, 최대 20자 이하로 구성해야 합니다.",
            },
            {
                fn: this.checkPasswordCombinationValidation,
                errMsg: "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.",
            }
        ]

        //만약에 값이 true일 경우 -->false로 바뀌어 조건 수행안하고 로그인 성공으로 감,
        //값이 false일 경우 --> true가 되어 조건을 수행하게됨. 여기서는 errMsg가 뜸.
        for(let validation of validations){
            if(!validation.fn.call(this)){
                alert(validation.errMsg);
                return;
            }
        }

        alert("로그인 성공");
        location.reload(); 
    }
}
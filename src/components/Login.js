export default class Login{

    constructor(emailInput,passwordInput){
        this.emailInput = emailInput;
        this.passwordInput =passwordInput;
        this.render();
    }

    checkRequiredValueIsEnteredInField() { // 3
        return [this.emailInput, this.passwordInput].every(
            (input) => input.value !== ""
        );
    }

    render(){
        const validations=[
            {
                fn :this.checkRequiredValueIsEnteredInField ,
                errMsg : "아이디 혹은 비밀번호가 입력되지 않았습니다."
            }
        ]

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
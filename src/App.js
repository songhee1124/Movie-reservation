import Login from "./components/Login.js";
export default class App{
 
    //constructor 메서드는 클래스가 인스턴스화될 때 호출되는 생성자 함수(멤버변수를 초기화 함)
    constructor(){
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.theaterLoginBtn = document.querySelector("#theaterLoginBtn");
        //this.#을 붙이면 캡슐화되서 이 클래스에서만 사용할 수 있는 private이 됨, 
        //#을 안할 경우, 전역적으로 쓸수 있는 변수가 됨 

        //인스턴스가 생성될때(new했을때) 초기화 상태로 랜더링됨
        this.render();
        
    }


    //방법1 (이렇게 할 경우, this가 명확하지 않아서 this.handleLoginClick.bind(this)로 써줘여함)
    // render() {
    //     this. theaterLoginBtn.addEventListener("click",this.handleLoginClick.bind(this));
    //     console.log(this.emailInput)
    //     console.log(this.passwordInput)
    //     console.log(this.theaterLoginBtn)
    // }
    // handleLoginClick(){
    //     console.log("로그인 버튼 클릭")
    // }


    //
    render() {
        this. theaterLoginBtn.addEventListener("click",this.handleLoginClick);
        console.log(this.emailInput)
        console.log(this.passwordInput)
        console.log(this.theaterLoginBtn)
    }
    handleLoginClick = () =>{
        new Login(this.emailInput,this.passwordInput);
        console.log("로그인 버튼 클릭")
    }
}
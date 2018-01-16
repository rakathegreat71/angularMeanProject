import { Component, OnInit } from '@angular/core';
import { ValidateService} from "../validate.service";
import { AuthService} from "../auth.service";
import { FlashMessage} from "angular-flash-message";
import{ Router}  from "@angular/router";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name:String;
	username:String;
	email:String;
	password:String;
	constructor(
		private validation:ValidateService, 
		private flashMessage:FlashMessage,
		private authService:AuthService,
		private router:Router
		) { }

	ngOnInit() {
	}

	onRegisterSubmit(){
		const user = {
			name:this.name,
			username:this.username,
			email:this.email,
			password:this.password
		}

		if (this.validation.validateRegister(user)) {
			this.flashMessage.danger("fill all the fields");
			// false will hold the page unless it will reload
			return false;
		}

		if(!this.validation.validateEmail(user.email)){
			console.log("email validation is working");
			this.flashMessage.danger("enter a valid email address");
			return false;
			
		}

		this.authService.registerUser(user).subscribe(data => {
			if (data.success) {
				this.flashMessage.success('you are registered and now you can login');
				this.router.navigate(['/']);
			}else{
				this.flashMessage.danger('something is wrong and please re-try');
				this.router.navigate(['/register']);
			}
		})
	}


}

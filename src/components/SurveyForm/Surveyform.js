import react from "react";
import './Surveyform.css';
import { ReactDOM } from "react";

function Surveyform() {
    return (
        <div classname="body">
            <h1>GeeksforGeeks Survey Form</h1>
            <form id="form">
                <div class="form-control">
                    <label for="name" id="label-name">
                        Name
                    </label>
                    <input type="text"id="name"placeholder="Enter your name" />
                </div>
                <div class="form-control">
			<label for="email" id="label-email">
				Email
			</label>
			<input type="email"
				id="email"
				placeholder="Enter your email" />
		</div>
        <div class="form-control">
			<label for="age" id="label-age">
				Age
			</label>

			<input type="text"
				id="age"
				placeholder="Enter your age" />
		</div>
        <div class="form-control">
			<label for="role" id="label-role">
				Which option best describes you?
			</label>
			
			
			<select name="role" id="role">
				<option value="student">Student</option>
				<option value="intern">Intern</option>
				<option value="professional">
					Professional
				</option>
				<option value="other">Other</option>
			</select>
		</div>
        <div class="form-control">
			<label>
				Would you recommend GeeksforGeeks
				to a friend?
			</label>
            <label for="recommed-1">
				<input type="radio"
					id="recommed-1"
					name="recommed" />Yes
			</label>
            <label for="recommed-2">
				<input type="radio"
					id="recommed-2"
					name="recommed" />No
			</label>
			<label for="recommed-3">
				<input type="radio"
					id="recommed-3"
					name="recommed" />Maybe
			</label>
            <div class="form-control">
			<label>Languages and Frameworks known
				<small>(Check all that apply)</small>
			</label>
			
			<label for="inp-1">
				<input type="checkbox"
					name="inp" />C</label>
			<label for="inp-2">
				<input type="checkbox"
					name="inp" />C++</label>
			<label for="inp-3">
				<input type="checkbox"
					name="inp" />C#</label>
			<label for="inp-4">
				<input type="checkbox"
					name="inp" />Java</label>
			<label for="inp-5">
				<input type="checkbox"
					name="inp" />Python</label>
			<label for="inp-6">
				<input type="checkbox"
					name="inp" />JavaScript</label>
			<label for="inp-7">
				<input type="checkbox"
					name="inp" />React</label>
			<label for="inp-7">
				<input type="checkbox"
					name="inp" />Angular</label>
			<label for="inp-7">
				<input type="checkbox"
					name="inp" />Django</label>
			<label for="inp-7">
				<input type="checkbox"
					name="inp" />Spring</label>
		</div>

		<div class="form-control">
			<label for="comment">
				Any comments or suggestions
			</label>

			
			<textarea name="comment" id="comment"
				placeholder="Enter your comment here">
			</textarea>
		</div>

	
		<button type="submit" value="submit">
			Submit
		</button>
        </div>

			
		

		

		
            </form>
        </div>
    );
}
export default Surveyform;
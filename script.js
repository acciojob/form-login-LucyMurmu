function getFormvalue() {
    //Write your code here
	event.preventDefault();
	let fname=document.getElementsByName("fname")[0].value.trim();
	let lname=document.getElementsByName("lname")[0].value.trim();
	alert(fname+" "+lname);

}

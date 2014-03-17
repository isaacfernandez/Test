#pragma strict

var isRotating : boolean = true;
var rotateSpeed : int = 10;


function Start () {
 isRotating = false;
}

function Update () {
	if (Input.GetMouseButtonDown(1)) {
		rotateSwitch();  }
	if (isRotating) {
	transform.Rotate(0, rotateSpeed * Time.deltaTime, 0);
	}

}

function rotateSwitch() {
	isRotating = (isRotating) ? false : true;
	print("clicked");	
}
#pragma strict

public var moveDistance : int = 10;
public var moveSpeed : float = 3.0f;
public var startingPosition : float;
public var direction : boolean = true; //true means away from original position, false means to

function Start () {
	startingPosition = transform.position.z;
	renderer.material.color = Color.red;
}

function Update () {
	if (transform.position.z - 10 > startingPosition || transform.position.z < startingPosition) {
		direction = !direction;
	}
	
	if (direction) {
		transform.position.z += moveSpeed * Time.deltaTime;
	}
	else 
		transform.position.z -= moveSpeed * Time.deltaTime;
}
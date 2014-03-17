#pragma strict

public var moveDistance : int = 15;
public var moveSpeed : float = 3.0f;
public var startingPosition : float;
public var direction : boolean = true; //true means away from original position, false means to

function Start () {
	startingPosition = transform.position.y;
	renderer.material.color = Color.blue;
}

function Update () {
	if (transform.position.y - moveDistance > startingPosition || transform.position.y < startingPosition) {
		direction = !direction;
	}
	
	if (direction) {
		transform.position.y += moveSpeed * Time.deltaTime;
	}
	else 
		transform.position.y -= moveSpeed * Time.deltaTime;
}
#pragma strict

public var turnSpeed : float = 20.0f;

function Start () {
	renderer.material.color = Color.yellow;
}

function Update () {
	 transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);
}
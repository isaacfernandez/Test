#pragma strict

public var xLimit : int = 255;
public var yLimit : int = 255;
public var zLimit : int = 255;

function Start () {
}

function Update () {
		renderer.material.color = new Color ( (transform.position.x)/xLimit, (transform.position.z)/zLimit, (transform.position.y)/yLimit, 1f);
}
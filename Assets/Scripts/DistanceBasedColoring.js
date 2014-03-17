#pragma strict

public var targetObject : GameObject;

function Start () {
	
}

function Update () {
	var dist =  Vector3.Distance(targetObject.transform.position, this.transform.position);
}
#pragma strict
var target : GameObject;


function Start () {
	target = GameObject.Find("FollowerM");
}

function Update () {
	this.light.color = target.renderer.material.color;
}
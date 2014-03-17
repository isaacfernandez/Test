#pragma strict

private var countdown : float = 1.5f;

function Start () {
	renderer.material.color = Color.green;
}

function Update () {

	countdown -= Time.deltaTime;
	if (countdown < 0) {
		if (renderer.material.color == Color.red) 
			renderer.material.color = Color.green; 
		else if  ( renderer.material.color == Color.green)
			renderer.material.color = Color.red; 
	countdown = 3.0f;
	}
		
}

#pragma strict
var direction : int;
var rotateSpeed : float = 20f;
var redBase : float = .5;
var greenBase : float = .5;
var blueBase : float = .5;

function Start () {
	//Random.seed = Time.time;
	 if (Random.value > 0.5f) 
	 	direction = 1;
	 	else direction = -1;
}

function Update () {
	transform.Rotate(Vector3.up, direction * rotateSpeed * Time.deltaTime);
	var colorGradient = Mathf.Abs((transform.eulerAngles.y-180))/18;
	renderer.material.color = new Color (redBase * colorGradient, greenBase * colorGradient, blueBase * colorGradient, 1f);
}
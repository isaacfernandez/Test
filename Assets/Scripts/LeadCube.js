#pragma strict

public var myObject : GameObject;
var rotateSpeed : int = 10;
	


function Start () {

}

function Update ()
{
    if(Input.GetKeyDown(KeyCode.R))
    {
        gameObject.renderer.material.color = Color.red;
    }
    if(Input.GetKeyDown(KeyCode.G))
    {
        gameObject.renderer.material.color = Color.green;
    }
    if(Input.GetKeyDown(KeyCode.B))
    {
        gameObject.renderer.material.color = Color.blue;
    }
    
    transform.Rotate(0, rotateSpeed * Time.deltaTime, 0);

    
    
    
}
var qSamples: int = 1024;  // array size
var refValue: float = 0.1; // RMS value for 0 dB
var threshold = 0.02;      // minimum amplitude to extract pitch
var rmsValue: float;   // sound level - RMS
var dbValue: float;    // sound level - dB
var pitchValue: float; // sound pitch - Hz
var maxVolume : float;
var leader : GameObject;
var scalarFactor : float = 2;
var minScale : float = 2;
var debug : boolean = false;

private var samples: float[]; // audio samples
private var spectrum: float[]; // audio spectrum

function Start () {
	leader = GameObject.FindWithTag("Leader");
	samples = new float[qSamples];
	spectrum = new float[qSamples];
}

function AnalyzeSound(){
	leader.audio.GetOutputData(samples, 0); // fill array with samples
	var i: int;
	var sum: float = 0;
	for (i=0; i < qSamples; i++){
		sum += samples[i]*samples[i]; // sum squared samples
	}
	rmsValue = Mathf.Sqrt(sum/qSamples); // rms = square root of average
	dbValue = 20*Mathf.Log10(rmsValue/refValue); // calculate dB
	if (dbValue < -160) dbValue = -160; // clamp it to -160dB min
	// get sound spectrum
	leader.audio.GetSpectrumData(spectrum, 0, FFTWindow.BlackmanHarris);
	var maxV: float = 0;
	var maxN: int = 0;
	for (i=0; i < qSamples; i++){ // find max 
		if (spectrum[i] > maxV && spectrum[i] > threshold){
			maxV = spectrum[i];
			maxN = i; // maxN is the index of max
		}
	}
	maxVolume = maxN;
	var freqN: float = maxN; // pass the index to a float variable
	if (maxN > 0 && maxN < qSamples-1){ // interpolate index using neighbours
		var dL = spectrum[maxN-1]/spectrum[maxN];
		var dR = spectrum[maxN+1]/spectrum[maxN];
		freqN += 0.5*(dR*dR - dL*dL);
	}
	pitchValue = freqN*24000/qSamples; // convert index to frequency
}

public var scale : float = 1;

function ScaleCube () {
	
	scale = ( ((dbValue/3) * scalarFactor) + scale) / 2;
	scale = (scale<minScale) ? minScale : scale;
	this.transform.localScale = Vector3(scale, scale, scale);
}

function ColorCube () {
	//Based off volume, green -> red, blue is ignored.
		/*
	red = pitchValue%512 / 513;
	green = red/2;
	renderer.material.color = new Color( red , green , 0);
	*/
	var lerpedColor = Color.Lerp(Color.red, Color.blue,  (rmsValue*3 - rmsValue) );
	renderer.material.color = lerpedColor;
}
	
function Update () {
	if (Input.GetKeyDown("p")){
		leader.audio.Play();
	}
	AnalyzeSound();
	ScaleCube();
	ColorCube();
	if (debug){ 
		Debug.Log( "RMS: "+rmsValue.ToString("F2")+
		" ("+dbValue.ToString("F1")+" dB)\n"+
		"Pitch: "+pitchValue.ToString("F0")+" Hz" );
	}
}
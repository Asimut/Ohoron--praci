function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rMzFnRdcMY":
        Script1();
        break;
      case "6PmDjY6mpAt":
        Script2();
        break;
      case "5e5tJDexnii":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var myName = lmsAPI.GetStudentName();
var array = myName.split(' ');
var newName = array[1]
player.SetVar("newName", newName);

}

function Script2()
{
  var player = GetPlayer();
var myName = lmsAPI.GetStudentName();
var array = myName.split(' ');
var newName = array[1]
player.SetVar("newName", newName);

}

function Script3()
{
  var player=GetPlayer();
var totalScore=player.GetVar("final_score");
if(totalScore=>60){
onBWEvent("BW_UpdateStatus","completed|~|"+totalScore+"|~|0|~|10|~|60|~|quiz");
}
else{
onBWEvent("BW_UpdateStatus","incomplete|~|"+totalScore+"|~|0|~|10|~|60|~|quiz");
}
}


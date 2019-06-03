// OBJETO TIMER
var Timer = function(campo, duracao)
{
	var t = this;
	Common.currentTime = duracao;
	Common.interval = setInterval(updateTime, 1000);
	Common.running = true;

	function updateTime()
	{
		if (Common.running)
		{
			if (Common.currentTime >= 0)
				campo.txt.text = Common.currentTime + "s";
			else
			{
				Common.clearInterval();
				Common.running = false;
				game.gameOver(true);
				playSound("wrong");
				playLateSound("gameovertempo", 1000);
			}
			Common.currentTime--;
		}
	}
}
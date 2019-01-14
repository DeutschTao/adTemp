# -*- coding: UTF-8 -*-

import os
import sys

if __name__ == "__main__":
	
	length = len(sys.argv)

	if length == 5:
		if sys.argv[1] == "-j" and sys.argv[3] == "-t":
			os.popen("adb push " + sys.argv[2] + " /sdcard/Android/data/com.example.vangogh.simulator/files/vangogh/json")
			os.popen("adb push " + sys.argv[4] + " /sdcard/Android/data/com.example.vangogh.simulator/files/vangogh/template")
		elif sys.argv[1] == "-t" and sys.argv[3] == "-j":
			os.popen("adb push " + sys.argv[2] + "  /sdcard/Android/data/com.example.vangogh.simulator/files/vangogh/template")
			os.popen("adb push " + sys.argv[4] + "  /sdcard/Android/data/com.example.vangogh.simulator/files/vangogh/json")
		else:
			print "参数配置错误"
	elif length == 3:
		if sys.argv[1] == "-t":
			os.popen("adb push " + sys.argv[2] + "  /sdcard/Android/data/com.example.vangogh.simulator/files/vangogh/template")
		else:
			print "参数配置错误"
	else:
		print "参数配置错误"
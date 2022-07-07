
from time import time
import usb
import time


# this detect the graphtec ce6000-40
plotter = usb.core.find(idVendor=0x0B4D, idProduct=0x1130)
# descriptor = usb.Device(dev=plotter).open()
plotusb = usb.busses()
graphtec = ""
for dev in plotusb:
    if dev.devices[0].idProduct == 4400:
        graphtec = dev.devices[0]

device = graphtec.open()
# device.setConfiguration(1)


time.sleep(1)

# readed = device.bulkRead(0x1, 0x200, 60*1000)
# print(readed)  # this return the state of the graphtec
# time.sleep(5)
# THIS IS A RECTANGLE
hpglExample = 'IN;IP0,0,4000,4000;SC0,100,0,100;SP1;PA0,0;PD;PR100,0;PR0,100;PR-100,0;PR0,-100;PU;'


#write = device.bulkWrite(0x1, moplot, 2*60*1000)
write = device.bulkWrite(0x1, hpglExample, 2*60*1000)
# print(write)

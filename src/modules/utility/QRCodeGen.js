/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

import { Aligner } from '@modules/utility/';
import { Button } from '@atoms';
import QRCode from 'easyqrcodejs';
import { console } from 'window-or-global';

const QRCodeGen = ({ pad, children }) => {
  function printer() {
    var text1 = document.getElementById('QRid').value;
    var options = {
      text: text1,
      width: 500,
      height: 500,
      backgroundImage: '/images/QRBG1.jpeg',
      backgroundImageAlpha: 1,
      quietZone: 160,
    };
    // Create QRCode Object
    //var canvas = document.getElementById("qrcode");
    //const context = canvas.getContext('2d');
    //context.clearRect(0, 0, canvas.width, canvas.height);
    var qrDiv = document.getElementById('mainDiv');
    while (qrDiv.firstChild) {
      qrDiv.removeChild(qrDiv.firstChild);
    }
    new QRCode(qrDiv, options);
  }

  return (
    <Box sx={{ pl: pad || '1rem' }}>
      {children}

      <Aligner center>
        <textarea id="QRid" name="QRinput" rows="4" cols="200"></textarea>
      </Aligner>

      <Aligner center>
        <Button onClick={printer}>Generate Your QR Code</Button>
      </Aligner>

      <Aligner center>
        <div className="qr" id="mainDiv">
          <canvas id="qrcode" width="0" height="58"></canvas>
        </div>
      </Aligner>
    </Box>
  );
};

export default QRCodeGen;

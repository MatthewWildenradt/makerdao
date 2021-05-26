/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

import { Aligner } from '@modules/utility/';
import { Button } from '@atoms';
import QRCode from 'easyqrcodejs';
import { console } from 'window-or-global';

const QRCodeGen = ({ pad, children }) => {
  var used = 0;
  function printer() {
    if (used) return;
    var text1 = document.getElementById('QRid').value;
    var options = {
      text: text1,
      width: 500,
      height: 500,
      //backgroundImage: '.../public/images/icons/QRGB.jpeg'
    };
    // Create QRCode Object
    new QRCode(document.getElementById('qrcode'), options);
    used = 1;
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
        <div className="qr" id="qrcode">
          <canvas width="0" height="58"></canvas>
        </div>
      </Aligner>
    </Box>
  );
};

export default QRCodeGen;

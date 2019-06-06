const Five = require('take-five');
const five = new Five();
const wol  = require('wol');

const PORT = process.env['WOLAAS_PORT'] || 4198;

five.post('/:mac', async (req, res, ctx) => {
  try {
    wol.wake(ctx.params.mac).then(() => {
      ctx.send({ success: true });
    }).catch(e => {
      ctx.err(500, e.toString());
    });
  } catch (e) {
    ctx.err(400, e.toString());
  }
});

five.listen(PORT);

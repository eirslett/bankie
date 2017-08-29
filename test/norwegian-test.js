const { expect } = require('chai')
const bankie = require('..')

describe('Norwegian', () => {
  it('requires an account number', () => {
    expect(bankie.getRequiredFields('NO')).to.eql([{
      name: 'account',
      type: 'number'
    }])
  })

  it('generate IBAN and bank meta', () => {
    expect(bankie.getData({
      countryCode: 'NO',
      account: 82000610190
    })).to.eql({
      iban: 'NO3882000610190',
      bank: {
        id: 8200,
        bic: 'DNBANOKK',
        name: 'DNB Bank ASA'
      }
    })
  })
})

const { expect } = require('chai')
const bankie = require('..')

describe('Norwegian', () => {
  it('requires an account number', () => {
    expect(bankie.getRequiredFields('NO')).to.eql([{
      name: 'account',
      type: 'number'
    }])
  })

  describe('test some account numbers', () => {
    it('Red Cross', () => {
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
    it('Amnesty', () => {
      expect(bankie.getData({
        countryCode: 'NO',
        account: 16441169764
      })).to.eql({
        iban: 'NO4816441169764',
        bank: {
          id: 1644,
          bic: 'DNBANOKK',
          name: 'DNB Bank ASA'
        }
      })
    })
    it('Tax Office Svalbard', () => {
      expect(bankie.getData({
        countryCode: 'NO',
        account: 63450621007
      })).to.eql({
        iban: 'NO3263450621007',
        bank: {
          id: 6345,
          bic: 'NDEANOKK',
          name: 'Nordea Bank AB (publ) filial i i Norge'
        }
      })
    })
  })
})

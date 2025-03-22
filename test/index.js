const assert = require('node:assert/strict')
const { beforeEach, describe, it } = require('node:test')

// npm modules
const fixtures = require('haraka-test-fixtures')

// start of tests
//    assert: https://nodejs.org/api/assert.html

beforeEach(() => {
  this.plugin = new fixtures.plugin('accept-all')
})

describe('accept-all', () => {
  it('loads', () => {
    assert.ok(this.plugin)
  })
})

describe('load_accept-all_ini', () => {
  it('loads accept-all.ini from config/accept-all.ini', () => {
    this.plugin.load_accept-all_ini()
    assert.ok(this.plugin.cfg)
  })

  it('initializes enabled boolean', () => {
    this.plugin.load_accept-all_ini()
    assert.equal(this.plugin.cfg.main.enabled, true, this.plugin.cfg)
  })
})

describe('uses text fixtures', () => {
  it('sets up a connection', () => {
    this.connection = fixtures.connection.createConnection({})
    assert.ok(this.connection.server)
  })

  it('sets up a transaction', () => {
    this.connection = fixtures.connection.createConnection({})
    this.connection.init_transaction()
    assert.ok(this.connection.transaction.header)
  })
})

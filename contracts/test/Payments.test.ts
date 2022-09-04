import {expect} from 'chai'
import { ethers } from 'hardhat'
import type {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers'
import {Payments} from '../typechain-types'

describe("Payments", () => {
    let acc1: SignerWithAddress
    let acc2: SignerWithAddress
    let payments: Payments

    beforeEach(async () => {
        [acc1, acc2] = await ethers.getSigners()
        const Payments = await ethers.getContractFactory('Payments', acc1)
        payments = await Payments.deploy()
        await payments.deployed()
        console.log('address contract ', payments.address)
    })

    it('should be deployed', async () => {
        expect(payments.address).to.be.properAddress
    })

    it('should have 0 ethers by default', async () => {
        const balance = await payments.currentBalance()
        expect(balance).to.eq(0)
    })

    it('should be possible to send funds', async () => {
        const msg = 'Hello everybody'
        const tx = await payments.connect(acc2).pay(msg, {value: 100})
        await expect(() => tx).to.changeEtherBalances([payments, acc2], [100, -100])
        await tx.wait()
        
        const newPayment = await payments.getPayment(acc2.address, 0)
        expect(newPayment.message).to.eq(msg)
        expect(newPayment.amount).to.eq(100)
        expect(newPayment.from).to.eq(acc2.address)
    })
})
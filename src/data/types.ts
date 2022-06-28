interface LedgerItem {
        generalLedgerId: number
        posted: string
        debitAccountId: string
        creditAccountId: string
        amount: number
        referenceId: string
      }

interface AccountDaily {
        date: string;
        debitDayTotal: number;
        creditDayTotal: number;
      }

      export type {
        LedgerItem,
        AccountDaily
      }

      
      

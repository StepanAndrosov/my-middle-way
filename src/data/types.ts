interface LedgerItem {
        generalLedgerId: number
        posted: string
        debitAccountId: string
        creditAccountId: string
        amount: number
        referenceId: string
      }

interface AccountDaily {
        id: string;
        date: string;
        debitDayTotal: number;
        creditDayTotal: number;
      }

      export type {
        LedgerItem,
        AccountDaily
      }

      
      

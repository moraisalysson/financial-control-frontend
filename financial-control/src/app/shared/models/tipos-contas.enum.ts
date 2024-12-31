export class TiposContasEnum {
  static readonly CONTA_CORRENTE = new TiposContasEnum(0, "Conta Corrente");
  static readonly CONTA_POUPANCA = new TiposContasEnum(1, "Conta Poupança");
  static readonly CONTA_INVESTIMENTOS = new TiposContasEnum(2, "Conta Investimentos");

  private constructor(public readonly value: number, public readonly  description: string) {
  }

  static values(): TiposContasEnum[] {
    return [TiposContasEnum.CONTA_CORRENTE, TiposContasEnum.CONTA_POUPANCA, TiposContasEnum.CONTA_INVESTIMENTOS];
  }

  static getByValue(value: number): TiposContasEnum | undefined {
    return this.values().find( (tipoConta) => tipoConta.value === value)
  }
}

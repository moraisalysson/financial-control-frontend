export class TiposTransacoesEnum {
  static readonly RECEITA = new TiposTransacoesEnum(0, "Receita");
  static readonly DESPESA = new TiposTransacoesEnum(1, "Despesa");
  static readonly TRANSFERENCIA = new TiposTransacoesEnum(2, "Transferência");

  private constructor(public readonly value: number, public readonly  description: string) {
  }

  static values(): TiposTransacoesEnum[] {
    return [TiposTransacoesEnum.RECEITA, TiposTransacoesEnum.DESPESA, TiposTransacoesEnum.TRANSFERENCIA];
  }

  static getByValue(value: number): TiposTransacoesEnum | undefined {
    return this.values().find( (tipoConta) => tipoConta.value === value)
  }
}

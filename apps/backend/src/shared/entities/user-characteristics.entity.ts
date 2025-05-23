import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserCharacteristics {
  @ApiProperty({
    example: "12",
    description: "User stats ID",
    type: "number",
  })
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @ApiProperty({
    example: "124",
    description: "Count of coins which user get after click on the game field",
    type: "number",
  })
  @Column({ type: "integer", default: 1 })
  coinsPerClick: number;

  @ApiProperty({
    example: "124",
    description: "Count of coins which user get passive by time",
    type: "number",
  })
  @Column({ type: "integer", default: 0 })
  passiveCoinsIncome: number;
}

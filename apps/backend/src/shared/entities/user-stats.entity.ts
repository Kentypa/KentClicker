import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserStats {
  @ApiProperty({
    example: "12",
    description: "User stats ID",
    type: "number",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "124",
    description: "Total count of user click coins",
    type: "number",
  })
  @Column({ type: "bigint", default: 0 })
  totalClickCoins: number;

  @ApiProperty({
    example: "124",
    description: "Total clicks of user",
    type: "number",
  })
  @Column({ type: "bigint", default: 0 })
  totalClicks: number;

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

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserKeyInput {
  @Field({ description: 'Exchange name', nullable: true  })
  exchangeName?: string;
  @Field({ description: 'Access key', nullable: true  })
  accessKey?: string;
  @Field({ description: 'Secret key', nullable: true  })
  secretKey?: string;
  @Field({ description: 'Remarks', nullable: true  })
  remarks?: string;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  // create an user
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);
    if (res && res.raw.length > 0) {
      return true;
    }
    return false;
  }

  // delete an user
  async del(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // update an user
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity);
    console.log(res);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // get all users
  async findAll(): Promise<User[]> {
    const res = await this.UserRepository.find();
    return res;
  }

  // find an user by id
  async find(id: string): Promise<User> {
    const res = await this.UserRepository.findOne({
      where: {
        id,
      },
    });
    return res;
  }

  // find an user by email
  async findByEmail(email: string): Promise<User> {
    const res = await this.UserRepository.findOne({
      where: {
        email,
      },
    });
    return res;
  }
}


/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    Job: 'Job'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "job"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    job?: JobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    jobs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | CompanyCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    legalName: string | null
    url: string | null
    description: string | null
    logo: string | null
    image: string | null
    streetAddress: string | null
    addressLocality: string | null
    addressRegion: string | null
    postalCode: string | null
    addressCountry: string | null
    telephone: string | null
    email: string | null
    contactType: string | null
    areaServed: string | null
    availableLanguage: string | null
    sameAs: string | null
    taxID: string | null
    vatID: string | null
    duns: string | null
    leiCode: string | null
    iso6523Code: string | null
    foundingDate: string | null
    foundingLocation: string | null
    numberOfEmployees: string | null
    parentOrganization: string | null
    subOrganization: string | null
    award: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    legalName: string | null
    url: string | null
    description: string | null
    logo: string | null
    image: string | null
    streetAddress: string | null
    addressLocality: string | null
    addressRegion: string | null
    postalCode: string | null
    addressCountry: string | null
    telephone: string | null
    email: string | null
    contactType: string | null
    areaServed: string | null
    availableLanguage: string | null
    sameAs: string | null
    taxID: string | null
    vatID: string | null
    duns: string | null
    leiCode: string | null
    iso6523Code: string | null
    foundingDate: string | null
    foundingLocation: string | null
    numberOfEmployees: string | null
    parentOrganization: string | null
    subOrganization: string | null
    award: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    legalName: number
    url: number
    description: number
    logo: number
    image: number
    streetAddress: number
    addressLocality: number
    addressRegion: number
    postalCode: number
    addressCountry: number
    telephone: number
    email: number
    contactType: number
    areaServed: number
    availableLanguage: number
    sameAs: number
    taxID: number
    vatID: number
    duns: number
    leiCode: number
    iso6523Code: number
    foundingDate: number
    foundingLocation: number
    numberOfEmployees: number
    parentOrganization: number
    subOrganization: number
    award: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    url?: true
    description?: true
    logo?: true
    image?: true
    streetAddress?: true
    addressLocality?: true
    addressRegion?: true
    postalCode?: true
    addressCountry?: true
    telephone?: true
    email?: true
    contactType?: true
    areaServed?: true
    availableLanguage?: true
    sameAs?: true
    taxID?: true
    vatID?: true
    duns?: true
    leiCode?: true
    iso6523Code?: true
    foundingDate?: true
    foundingLocation?: true
    numberOfEmployees?: true
    parentOrganization?: true
    subOrganization?: true
    award?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    url?: true
    description?: true
    logo?: true
    image?: true
    streetAddress?: true
    addressLocality?: true
    addressRegion?: true
    postalCode?: true
    addressCountry?: true
    telephone?: true
    email?: true
    contactType?: true
    areaServed?: true
    availableLanguage?: true
    sameAs?: true
    taxID?: true
    vatID?: true
    duns?: true
    leiCode?: true
    iso6523Code?: true
    foundingDate?: true
    foundingLocation?: true
    numberOfEmployees?: true
    parentOrganization?: true
    subOrganization?: true
    award?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    url?: true
    description?: true
    logo?: true
    image?: true
    streetAddress?: true
    addressLocality?: true
    addressRegion?: true
    postalCode?: true
    addressCountry?: true
    telephone?: true
    email?: true
    contactType?: true
    areaServed?: true
    availableLanguage?: true
    sameAs?: true
    taxID?: true
    vatID?: true
    duns?: true
    leiCode?: true
    iso6523Code?: true
    foundingDate?: true
    foundingLocation?: true
    numberOfEmployees?: true
    parentOrganization?: true
    subOrganization?: true
    award?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    legalName: string | null
    url: string | null
    description: string | null
    logo: string | null
    image: string | null
    streetAddress: string | null
    addressLocality: string | null
    addressRegion: string | null
    postalCode: string | null
    addressCountry: string | null
    telephone: string | null
    email: string | null
    contactType: string | null
    areaServed: string | null
    availableLanguage: string | null
    sameAs: string | null
    taxID: string | null
    vatID: string | null
    duns: string | null
    leiCode: string | null
    iso6523Code: string | null
    foundingDate: string | null
    foundingLocation: string | null
    numberOfEmployees: string | null
    parentOrganization: string | null
    subOrganization: string | null
    award: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    url?: boolean
    description?: boolean
    logo?: boolean
    image?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    telephone?: boolean
    email?: boolean
    contactType?: boolean
    areaServed?: boolean
    availableLanguage?: boolean
    sameAs?: boolean
    taxID?: boolean
    vatID?: boolean
    duns?: boolean
    leiCode?: boolean
    iso6523Code?: boolean
    foundingDate?: boolean
    foundingLocation?: boolean
    numberOfEmployees?: boolean
    parentOrganization?: boolean
    subOrganization?: boolean
    award?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobs?: boolean | Company$jobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    url?: boolean
    description?: boolean
    logo?: boolean
    image?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    telephone?: boolean
    email?: boolean
    contactType?: boolean
    areaServed?: boolean
    availableLanguage?: boolean
    sameAs?: boolean
    taxID?: boolean
    vatID?: boolean
    duns?: boolean
    leiCode?: boolean
    iso6523Code?: boolean
    foundingDate?: boolean
    foundingLocation?: boolean
    numberOfEmployees?: boolean
    parentOrganization?: boolean
    subOrganization?: boolean
    award?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    url?: boolean
    description?: boolean
    logo?: boolean
    image?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    telephone?: boolean
    email?: boolean
    contactType?: boolean
    areaServed?: boolean
    availableLanguage?: boolean
    sameAs?: boolean
    taxID?: boolean
    vatID?: boolean
    duns?: boolean
    leiCode?: boolean
    iso6523Code?: boolean
    foundingDate?: boolean
    foundingLocation?: boolean
    numberOfEmployees?: boolean
    parentOrganization?: boolean
    subOrganization?: boolean
    award?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    legalName?: boolean
    url?: boolean
    description?: boolean
    logo?: boolean
    image?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    telephone?: boolean
    email?: boolean
    contactType?: boolean
    areaServed?: boolean
    availableLanguage?: boolean
    sameAs?: boolean
    taxID?: boolean
    vatID?: boolean
    duns?: boolean
    leiCode?: boolean
    iso6523Code?: boolean
    foundingDate?: boolean
    foundingLocation?: boolean
    numberOfEmployees?: boolean
    parentOrganization?: boolean
    subOrganization?: boolean
    award?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "legalName" | "url" | "description" | "logo" | "image" | "streetAddress" | "addressLocality" | "addressRegion" | "postalCode" | "addressCountry" | "telephone" | "email" | "contactType" | "areaServed" | "availableLanguage" | "sameAs" | "taxID" | "vatID" | "duns" | "leiCode" | "iso6523Code" | "foundingDate" | "foundingLocation" | "numberOfEmployees" | "parentOrganization" | "subOrganization" | "award" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Company$jobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      legalName: string | null
      url: string | null
      description: string | null
      logo: string | null
      image: string | null
      streetAddress: string | null
      addressLocality: string | null
      addressRegion: string | null
      postalCode: string | null
      addressCountry: string | null
      telephone: string | null
      email: string | null
      contactType: string | null
      areaServed: string | null
      availableLanguage: string | null
      sameAs: string | null
      taxID: string | null
      vatID: string | null
      duns: string | null
      leiCode: string | null
      iso6523Code: string | null
      foundingDate: string | null
      foundingLocation: string | null
      numberOfEmployees: string | null
      parentOrganization: string | null
      subOrganization: string | null
      award: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends Company$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Company$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly legalName: FieldRef<"Company", 'String'>
    readonly url: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly image: FieldRef<"Company", 'String'>
    readonly streetAddress: FieldRef<"Company", 'String'>
    readonly addressLocality: FieldRef<"Company", 'String'>
    readonly addressRegion: FieldRef<"Company", 'String'>
    readonly postalCode: FieldRef<"Company", 'String'>
    readonly addressCountry: FieldRef<"Company", 'String'>
    readonly telephone: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly contactType: FieldRef<"Company", 'String'>
    readonly areaServed: FieldRef<"Company", 'String'>
    readonly availableLanguage: FieldRef<"Company", 'String'>
    readonly sameAs: FieldRef<"Company", 'String'>
    readonly taxID: FieldRef<"Company", 'String'>
    readonly vatID: FieldRef<"Company", 'String'>
    readonly duns: FieldRef<"Company", 'String'>
    readonly leiCode: FieldRef<"Company", 'String'>
    readonly iso6523Code: FieldRef<"Company", 'String'>
    readonly foundingDate: FieldRef<"Company", 'String'>
    readonly foundingLocation: FieldRef<"Company", 'String'>
    readonly numberOfEmployees: FieldRef<"Company", 'String'>
    readonly parentOrganization: FieldRef<"Company", 'String'>
    readonly subOrganization: FieldRef<"Company", 'String'>
    readonly award: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.jobs
   */
  export type Company$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    totalJobOpenings: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    totalJobOpenings: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    identifier: string | null
    jobId: string | null
    slug: string | null
    datePosted: string | null
    validThrough: string | null
    dateModified: string | null
    companyId: number | null
    hiringOrgName: string | null
    hiringOrgUrl: string | null
    hiringOrgLogo: string | null
    hiringOrgSameAs: string | null
    streetAddress: string | null
    addressLocality: string | null
    addressRegion: string | null
    postalCode: string | null
    addressCountry: string | null
    jobLocationType: string | null
    applicantLocationRequirements: string | null
    employmentType: string | null
    workHours: string | null
    jobStartDate: string | null
    jobDuration: string | null
    jobImmediateStart: boolean | null
    totalJobOpenings: number | null
    employmentUnit: string | null
    salaryValue: string | null
    baseSalary: string | null
    salaryCurrency: string | null
    salaryUnitText: string | null
    estimatedSalary: string | null
    educationRequirements: string | null
    experienceRequirements: string | null
    experienceInPlaceOfEducation: boolean | null
    qualifications: string | null
    skills: string | null
    physicalRequirement: string | null
    sensoryRequirement: string | null
    securityClearanceRequirement: string | null
    responsibilities: string | null
    industry: string | null
    occupationalCategory: string | null
    specialCommitments: string | null
    incentives: string | null
    incentiveCompensation: string | null
    benefits: string | null
    jobBenefits: string | null
    applyUrl: string | null
    applicationContact: string | null
    applicationDeadline: string | null
    directApply: boolean | null
    category: string | null
    seniority: string | null
    isActive: boolean | null
    whoShouldApply: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    identifier: string | null
    jobId: string | null
    slug: string | null
    datePosted: string | null
    validThrough: string | null
    dateModified: string | null
    companyId: number | null
    hiringOrgName: string | null
    hiringOrgUrl: string | null
    hiringOrgLogo: string | null
    hiringOrgSameAs: string | null
    streetAddress: string | null
    addressLocality: string | null
    addressRegion: string | null
    postalCode: string | null
    addressCountry: string | null
    jobLocationType: string | null
    applicantLocationRequirements: string | null
    employmentType: string | null
    workHours: string | null
    jobStartDate: string | null
    jobDuration: string | null
    jobImmediateStart: boolean | null
    totalJobOpenings: number | null
    employmentUnit: string | null
    salaryValue: string | null
    baseSalary: string | null
    salaryCurrency: string | null
    salaryUnitText: string | null
    estimatedSalary: string | null
    educationRequirements: string | null
    experienceRequirements: string | null
    experienceInPlaceOfEducation: boolean | null
    qualifications: string | null
    skills: string | null
    physicalRequirement: string | null
    sensoryRequirement: string | null
    securityClearanceRequirement: string | null
    responsibilities: string | null
    industry: string | null
    occupationalCategory: string | null
    specialCommitments: string | null
    incentives: string | null
    incentiveCompensation: string | null
    benefits: string | null
    jobBenefits: string | null
    applyUrl: string | null
    applicationContact: string | null
    applicationDeadline: string | null
    directApply: boolean | null
    category: string | null
    seniority: string | null
    isActive: boolean | null
    whoShouldApply: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    identifier: number
    jobId: number
    slug: number
    datePosted: number
    validThrough: number
    dateModified: number
    companyId: number
    hiringOrgName: number
    hiringOrgUrl: number
    hiringOrgLogo: number
    hiringOrgSameAs: number
    streetAddress: number
    addressLocality: number
    addressRegion: number
    postalCode: number
    addressCountry: number
    jobLocationType: number
    applicantLocationRequirements: number
    employmentType: number
    workHours: number
    jobStartDate: number
    jobDuration: number
    jobImmediateStart: number
    totalJobOpenings: number
    employmentUnit: number
    salaryValue: number
    baseSalary: number
    salaryCurrency: number
    salaryUnitText: number
    estimatedSalary: number
    educationRequirements: number
    experienceRequirements: number
    experienceInPlaceOfEducation: number
    qualifications: number
    skills: number
    physicalRequirement: number
    sensoryRequirement: number
    securityClearanceRequirement: number
    responsibilities: number
    industry: number
    occupationalCategory: number
    specialCommitments: number
    incentives: number
    incentiveCompensation: number
    benefits: number
    jobBenefits: number
    applyUrl: number
    applicationContact: number
    applicationDeadline: number
    directApply: number
    category: number
    seniority: number
    isActive: number
    whoShouldApply: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    companyId?: true
    totalJobOpenings?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    companyId?: true
    totalJobOpenings?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    identifier?: true
    jobId?: true
    slug?: true
    datePosted?: true
    validThrough?: true
    dateModified?: true
    companyId?: true
    hiringOrgName?: true
    hiringOrgUrl?: true
    hiringOrgLogo?: true
    hiringOrgSameAs?: true
    streetAddress?: true
    addressLocality?: true
    addressRegion?: true
    postalCode?: true
    addressCountry?: true
    jobLocationType?: true
    applicantLocationRequirements?: true
    employmentType?: true
    workHours?: true
    jobStartDate?: true
    jobDuration?: true
    jobImmediateStart?: true
    totalJobOpenings?: true
    employmentUnit?: true
    salaryValue?: true
    baseSalary?: true
    salaryCurrency?: true
    salaryUnitText?: true
    estimatedSalary?: true
    educationRequirements?: true
    experienceRequirements?: true
    experienceInPlaceOfEducation?: true
    qualifications?: true
    skills?: true
    physicalRequirement?: true
    sensoryRequirement?: true
    securityClearanceRequirement?: true
    responsibilities?: true
    industry?: true
    occupationalCategory?: true
    specialCommitments?: true
    incentives?: true
    incentiveCompensation?: true
    benefits?: true
    jobBenefits?: true
    applyUrl?: true
    applicationContact?: true
    applicationDeadline?: true
    directApply?: true
    category?: true
    seniority?: true
    isActive?: true
    whoShouldApply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    identifier?: true
    jobId?: true
    slug?: true
    datePosted?: true
    validThrough?: true
    dateModified?: true
    companyId?: true
    hiringOrgName?: true
    hiringOrgUrl?: true
    hiringOrgLogo?: true
    hiringOrgSameAs?: true
    streetAddress?: true
    addressLocality?: true
    addressRegion?: true
    postalCode?: true
    addressCountry?: true
    jobLocationType?: true
    applicantLocationRequirements?: true
    employmentType?: true
    workHours?: true
    jobStartDate?: true
    jobDuration?: true
    jobImmediateStart?: true
    totalJobOpenings?: true
    employmentUnit?: true
    salaryValue?: true
    baseSalary?: true
    salaryCurrency?: true
    salaryUnitText?: true
    estimatedSalary?: true
    educationRequirements?: true
    experienceRequirements?: true
    experienceInPlaceOfEducation?: true
    qualifications?: true
    skills?: true
    physicalRequirement?: true
    sensoryRequirement?: true
    securityClearanceRequirement?: true
    responsibilities?: true
    industry?: true
    occupationalCategory?: true
    specialCommitments?: true
    incentives?: true
    incentiveCompensation?: true
    benefits?: true
    jobBenefits?: true
    applyUrl?: true
    applicationContact?: true
    applicationDeadline?: true
    directApply?: true
    category?: true
    seniority?: true
    isActive?: true
    whoShouldApply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    identifier?: true
    jobId?: true
    slug?: true
    datePosted?: true
    validThrough?: true
    dateModified?: true
    companyId?: true
    hiringOrgName?: true
    hiringOrgUrl?: true
    hiringOrgLogo?: true
    hiringOrgSameAs?: true
    streetAddress?: true
    addressLocality?: true
    addressRegion?: true
    postalCode?: true
    addressCountry?: true
    jobLocationType?: true
    applicantLocationRequirements?: true
    employmentType?: true
    workHours?: true
    jobStartDate?: true
    jobDuration?: true
    jobImmediateStart?: true
    totalJobOpenings?: true
    employmentUnit?: true
    salaryValue?: true
    baseSalary?: true
    salaryCurrency?: true
    salaryUnitText?: true
    estimatedSalary?: true
    educationRequirements?: true
    experienceRequirements?: true
    experienceInPlaceOfEducation?: true
    qualifications?: true
    skills?: true
    physicalRequirement?: true
    sensoryRequirement?: true
    securityClearanceRequirement?: true
    responsibilities?: true
    industry?: true
    occupationalCategory?: true
    specialCommitments?: true
    incentives?: true
    incentiveCompensation?: true
    benefits?: true
    jobBenefits?: true
    applyUrl?: true
    applicationContact?: true
    applicationDeadline?: true
    directApply?: true
    category?: true
    seniority?: true
    isActive?: true
    whoShouldApply?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    title: string
    description: string | null
    identifier: string | null
    jobId: string | null
    slug: string
    datePosted: string | null
    validThrough: string | null
    dateModified: string | null
    companyId: number | null
    hiringOrgName: string | null
    hiringOrgUrl: string | null
    hiringOrgLogo: string | null
    hiringOrgSameAs: string | null
    streetAddress: string | null
    addressLocality: string | null
    addressRegion: string | null
    postalCode: string | null
    addressCountry: string | null
    jobLocationType: string | null
    applicantLocationRequirements: string | null
    employmentType: string | null
    workHours: string | null
    jobStartDate: string | null
    jobDuration: string | null
    jobImmediateStart: boolean | null
    totalJobOpenings: number | null
    employmentUnit: string | null
    salaryValue: string | null
    baseSalary: string | null
    salaryCurrency: string | null
    salaryUnitText: string | null
    estimatedSalary: string | null
    educationRequirements: string | null
    experienceRequirements: string | null
    experienceInPlaceOfEducation: boolean | null
    qualifications: string | null
    skills: string | null
    physicalRequirement: string | null
    sensoryRequirement: string | null
    securityClearanceRequirement: string | null
    responsibilities: string | null
    industry: string | null
    occupationalCategory: string | null
    specialCommitments: string | null
    incentives: string | null
    incentiveCompensation: string | null
    benefits: string | null
    jobBenefits: string | null
    applyUrl: string | null
    applicationContact: string | null
    applicationDeadline: string | null
    directApply: boolean | null
    category: string | null
    seniority: string | null
    isActive: boolean
    whoShouldApply: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    identifier?: boolean
    jobId?: boolean
    slug?: boolean
    datePosted?: boolean
    validThrough?: boolean
    dateModified?: boolean
    companyId?: boolean
    hiringOrgName?: boolean
    hiringOrgUrl?: boolean
    hiringOrgLogo?: boolean
    hiringOrgSameAs?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    jobLocationType?: boolean
    applicantLocationRequirements?: boolean
    employmentType?: boolean
    workHours?: boolean
    jobStartDate?: boolean
    jobDuration?: boolean
    jobImmediateStart?: boolean
    totalJobOpenings?: boolean
    employmentUnit?: boolean
    salaryValue?: boolean
    baseSalary?: boolean
    salaryCurrency?: boolean
    salaryUnitText?: boolean
    estimatedSalary?: boolean
    educationRequirements?: boolean
    experienceRequirements?: boolean
    experienceInPlaceOfEducation?: boolean
    qualifications?: boolean
    skills?: boolean
    physicalRequirement?: boolean
    sensoryRequirement?: boolean
    securityClearanceRequirement?: boolean
    responsibilities?: boolean
    industry?: boolean
    occupationalCategory?: boolean
    specialCommitments?: boolean
    incentives?: boolean
    incentiveCompensation?: boolean
    benefits?: boolean
    jobBenefits?: boolean
    applyUrl?: boolean
    applicationContact?: boolean
    applicationDeadline?: boolean
    directApply?: boolean
    category?: boolean
    seniority?: boolean
    isActive?: boolean
    whoShouldApply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Job$companyArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    identifier?: boolean
    jobId?: boolean
    slug?: boolean
    datePosted?: boolean
    validThrough?: boolean
    dateModified?: boolean
    companyId?: boolean
    hiringOrgName?: boolean
    hiringOrgUrl?: boolean
    hiringOrgLogo?: boolean
    hiringOrgSameAs?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    jobLocationType?: boolean
    applicantLocationRequirements?: boolean
    employmentType?: boolean
    workHours?: boolean
    jobStartDate?: boolean
    jobDuration?: boolean
    jobImmediateStart?: boolean
    totalJobOpenings?: boolean
    employmentUnit?: boolean
    salaryValue?: boolean
    baseSalary?: boolean
    salaryCurrency?: boolean
    salaryUnitText?: boolean
    estimatedSalary?: boolean
    educationRequirements?: boolean
    experienceRequirements?: boolean
    experienceInPlaceOfEducation?: boolean
    qualifications?: boolean
    skills?: boolean
    physicalRequirement?: boolean
    sensoryRequirement?: boolean
    securityClearanceRequirement?: boolean
    responsibilities?: boolean
    industry?: boolean
    occupationalCategory?: boolean
    specialCommitments?: boolean
    incentives?: boolean
    incentiveCompensation?: boolean
    benefits?: boolean
    jobBenefits?: boolean
    applyUrl?: boolean
    applicationContact?: boolean
    applicationDeadline?: boolean
    directApply?: boolean
    category?: boolean
    seniority?: boolean
    isActive?: boolean
    whoShouldApply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Job$companyArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    identifier?: boolean
    jobId?: boolean
    slug?: boolean
    datePosted?: boolean
    validThrough?: boolean
    dateModified?: boolean
    companyId?: boolean
    hiringOrgName?: boolean
    hiringOrgUrl?: boolean
    hiringOrgLogo?: boolean
    hiringOrgSameAs?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    jobLocationType?: boolean
    applicantLocationRequirements?: boolean
    employmentType?: boolean
    workHours?: boolean
    jobStartDate?: boolean
    jobDuration?: boolean
    jobImmediateStart?: boolean
    totalJobOpenings?: boolean
    employmentUnit?: boolean
    salaryValue?: boolean
    baseSalary?: boolean
    salaryCurrency?: boolean
    salaryUnitText?: boolean
    estimatedSalary?: boolean
    educationRequirements?: boolean
    experienceRequirements?: boolean
    experienceInPlaceOfEducation?: boolean
    qualifications?: boolean
    skills?: boolean
    physicalRequirement?: boolean
    sensoryRequirement?: boolean
    securityClearanceRequirement?: boolean
    responsibilities?: boolean
    industry?: boolean
    occupationalCategory?: boolean
    specialCommitments?: boolean
    incentives?: boolean
    incentiveCompensation?: boolean
    benefits?: boolean
    jobBenefits?: boolean
    applyUrl?: boolean
    applicationContact?: boolean
    applicationDeadline?: boolean
    directApply?: boolean
    category?: boolean
    seniority?: boolean
    isActive?: boolean
    whoShouldApply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Job$companyArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    identifier?: boolean
    jobId?: boolean
    slug?: boolean
    datePosted?: boolean
    validThrough?: boolean
    dateModified?: boolean
    companyId?: boolean
    hiringOrgName?: boolean
    hiringOrgUrl?: boolean
    hiringOrgLogo?: boolean
    hiringOrgSameAs?: boolean
    streetAddress?: boolean
    addressLocality?: boolean
    addressRegion?: boolean
    postalCode?: boolean
    addressCountry?: boolean
    jobLocationType?: boolean
    applicantLocationRequirements?: boolean
    employmentType?: boolean
    workHours?: boolean
    jobStartDate?: boolean
    jobDuration?: boolean
    jobImmediateStart?: boolean
    totalJobOpenings?: boolean
    employmentUnit?: boolean
    salaryValue?: boolean
    baseSalary?: boolean
    salaryCurrency?: boolean
    salaryUnitText?: boolean
    estimatedSalary?: boolean
    educationRequirements?: boolean
    experienceRequirements?: boolean
    experienceInPlaceOfEducation?: boolean
    qualifications?: boolean
    skills?: boolean
    physicalRequirement?: boolean
    sensoryRequirement?: boolean
    securityClearanceRequirement?: boolean
    responsibilities?: boolean
    industry?: boolean
    occupationalCategory?: boolean
    specialCommitments?: boolean
    incentives?: boolean
    incentiveCompensation?: boolean
    benefits?: boolean
    jobBenefits?: boolean
    applyUrl?: boolean
    applicationContact?: boolean
    applicationDeadline?: boolean
    directApply?: boolean
    category?: boolean
    seniority?: boolean
    isActive?: boolean
    whoShouldApply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "identifier" | "jobId" | "slug" | "datePosted" | "validThrough" | "dateModified" | "companyId" | "hiringOrgName" | "hiringOrgUrl" | "hiringOrgLogo" | "hiringOrgSameAs" | "streetAddress" | "addressLocality" | "addressRegion" | "postalCode" | "addressCountry" | "jobLocationType" | "applicantLocationRequirements" | "employmentType" | "workHours" | "jobStartDate" | "jobDuration" | "jobImmediateStart" | "totalJobOpenings" | "employmentUnit" | "salaryValue" | "baseSalary" | "salaryCurrency" | "salaryUnitText" | "estimatedSalary" | "educationRequirements" | "experienceRequirements" | "experienceInPlaceOfEducation" | "qualifications" | "skills" | "physicalRequirement" | "sensoryRequirement" | "securityClearanceRequirement" | "responsibilities" | "industry" | "occupationalCategory" | "specialCommitments" | "incentives" | "incentiveCompensation" | "benefits" | "jobBenefits" | "applyUrl" | "applicationContact" | "applicationDeadline" | "directApply" | "category" | "seniority" | "isActive" | "whoShouldApply" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Job$companyArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Job$companyArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Job$companyArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      identifier: string | null
      jobId: string | null
      slug: string
      datePosted: string | null
      validThrough: string | null
      dateModified: string | null
      companyId: number | null
      hiringOrgName: string | null
      hiringOrgUrl: string | null
      hiringOrgLogo: string | null
      hiringOrgSameAs: string | null
      streetAddress: string | null
      addressLocality: string | null
      addressRegion: string | null
      postalCode: string | null
      addressCountry: string | null
      jobLocationType: string | null
      applicantLocationRequirements: string | null
      employmentType: string | null
      workHours: string | null
      jobStartDate: string | null
      jobDuration: string | null
      jobImmediateStart: boolean | null
      totalJobOpenings: number | null
      employmentUnit: string | null
      salaryValue: string | null
      baseSalary: string | null
      salaryCurrency: string | null
      salaryUnitText: string | null
      estimatedSalary: string | null
      educationRequirements: string | null
      experienceRequirements: string | null
      experienceInPlaceOfEducation: boolean | null
      qualifications: string | null
      skills: string | null
      physicalRequirement: string | null
      sensoryRequirement: string | null
      securityClearanceRequirement: string | null
      responsibilities: string | null
      industry: string | null
      occupationalCategory: string | null
      specialCommitments: string | null
      incentives: string | null
      incentiveCompensation: string | null
      benefits: string | null
      jobBenefits: string | null
      applyUrl: string | null
      applicationContact: string | null
      applicationDeadline: string | null
      directApply: boolean | null
      category: string | null
      seniority: string | null
      isActive: boolean
      whoShouldApply: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends Job$companyArgs<ExtArgs> = {}>(args?: Subset<T, Job$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly identifier: FieldRef<"Job", 'String'>
    readonly jobId: FieldRef<"Job", 'String'>
    readonly slug: FieldRef<"Job", 'String'>
    readonly datePosted: FieldRef<"Job", 'String'>
    readonly validThrough: FieldRef<"Job", 'String'>
    readonly dateModified: FieldRef<"Job", 'String'>
    readonly companyId: FieldRef<"Job", 'Int'>
    readonly hiringOrgName: FieldRef<"Job", 'String'>
    readonly hiringOrgUrl: FieldRef<"Job", 'String'>
    readonly hiringOrgLogo: FieldRef<"Job", 'String'>
    readonly hiringOrgSameAs: FieldRef<"Job", 'String'>
    readonly streetAddress: FieldRef<"Job", 'String'>
    readonly addressLocality: FieldRef<"Job", 'String'>
    readonly addressRegion: FieldRef<"Job", 'String'>
    readonly postalCode: FieldRef<"Job", 'String'>
    readonly addressCountry: FieldRef<"Job", 'String'>
    readonly jobLocationType: FieldRef<"Job", 'String'>
    readonly applicantLocationRequirements: FieldRef<"Job", 'String'>
    readonly employmentType: FieldRef<"Job", 'String'>
    readonly workHours: FieldRef<"Job", 'String'>
    readonly jobStartDate: FieldRef<"Job", 'String'>
    readonly jobDuration: FieldRef<"Job", 'String'>
    readonly jobImmediateStart: FieldRef<"Job", 'Boolean'>
    readonly totalJobOpenings: FieldRef<"Job", 'Int'>
    readonly employmentUnit: FieldRef<"Job", 'String'>
    readonly salaryValue: FieldRef<"Job", 'String'>
    readonly baseSalary: FieldRef<"Job", 'String'>
    readonly salaryCurrency: FieldRef<"Job", 'String'>
    readonly salaryUnitText: FieldRef<"Job", 'String'>
    readonly estimatedSalary: FieldRef<"Job", 'String'>
    readonly educationRequirements: FieldRef<"Job", 'String'>
    readonly experienceRequirements: FieldRef<"Job", 'String'>
    readonly experienceInPlaceOfEducation: FieldRef<"Job", 'Boolean'>
    readonly qualifications: FieldRef<"Job", 'String'>
    readonly skills: FieldRef<"Job", 'String'>
    readonly physicalRequirement: FieldRef<"Job", 'String'>
    readonly sensoryRequirement: FieldRef<"Job", 'String'>
    readonly securityClearanceRequirement: FieldRef<"Job", 'String'>
    readonly responsibilities: FieldRef<"Job", 'String'>
    readonly industry: FieldRef<"Job", 'String'>
    readonly occupationalCategory: FieldRef<"Job", 'String'>
    readonly specialCommitments: FieldRef<"Job", 'String'>
    readonly incentives: FieldRef<"Job", 'String'>
    readonly incentiveCompensation: FieldRef<"Job", 'String'>
    readonly benefits: FieldRef<"Job", 'String'>
    readonly jobBenefits: FieldRef<"Job", 'String'>
    readonly applyUrl: FieldRef<"Job", 'String'>
    readonly applicationContact: FieldRef<"Job", 'String'>
    readonly applicationDeadline: FieldRef<"Job", 'String'>
    readonly directApply: FieldRef<"Job", 'Boolean'>
    readonly category: FieldRef<"Job", 'String'>
    readonly seniority: FieldRef<"Job", 'String'>
    readonly isActive: FieldRef<"Job", 'Boolean'>
    readonly whoShouldApply: FieldRef<"Job", 'String'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.company
   */
  export type Job$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    legalName: 'legalName',
    url: 'url',
    description: 'description',
    logo: 'logo',
    image: 'image',
    streetAddress: 'streetAddress',
    addressLocality: 'addressLocality',
    addressRegion: 'addressRegion',
    postalCode: 'postalCode',
    addressCountry: 'addressCountry',
    telephone: 'telephone',
    email: 'email',
    contactType: 'contactType',
    areaServed: 'areaServed',
    availableLanguage: 'availableLanguage',
    sameAs: 'sameAs',
    taxID: 'taxID',
    vatID: 'vatID',
    duns: 'duns',
    leiCode: 'leiCode',
    iso6523Code: 'iso6523Code',
    foundingDate: 'foundingDate',
    foundingLocation: 'foundingLocation',
    numberOfEmployees: 'numberOfEmployees',
    parentOrganization: 'parentOrganization',
    subOrganization: 'subOrganization',
    award: 'award',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    identifier: 'identifier',
    jobId: 'jobId',
    slug: 'slug',
    datePosted: 'datePosted',
    validThrough: 'validThrough',
    dateModified: 'dateModified',
    companyId: 'companyId',
    hiringOrgName: 'hiringOrgName',
    hiringOrgUrl: 'hiringOrgUrl',
    hiringOrgLogo: 'hiringOrgLogo',
    hiringOrgSameAs: 'hiringOrgSameAs',
    streetAddress: 'streetAddress',
    addressLocality: 'addressLocality',
    addressRegion: 'addressRegion',
    postalCode: 'postalCode',
    addressCountry: 'addressCountry',
    jobLocationType: 'jobLocationType',
    applicantLocationRequirements: 'applicantLocationRequirements',
    employmentType: 'employmentType',
    workHours: 'workHours',
    jobStartDate: 'jobStartDate',
    jobDuration: 'jobDuration',
    jobImmediateStart: 'jobImmediateStart',
    totalJobOpenings: 'totalJobOpenings',
    employmentUnit: 'employmentUnit',
    salaryValue: 'salaryValue',
    baseSalary: 'baseSalary',
    salaryCurrency: 'salaryCurrency',
    salaryUnitText: 'salaryUnitText',
    estimatedSalary: 'estimatedSalary',
    educationRequirements: 'educationRequirements',
    experienceRequirements: 'experienceRequirements',
    experienceInPlaceOfEducation: 'experienceInPlaceOfEducation',
    qualifications: 'qualifications',
    skills: 'skills',
    physicalRequirement: 'physicalRequirement',
    sensoryRequirement: 'sensoryRequirement',
    securityClearanceRequirement: 'securityClearanceRequirement',
    responsibilities: 'responsibilities',
    industry: 'industry',
    occupationalCategory: 'occupationalCategory',
    specialCommitments: 'specialCommitments',
    incentives: 'incentives',
    incentiveCompensation: 'incentiveCompensation',
    benefits: 'benefits',
    jobBenefits: 'jobBenefits',
    applyUrl: 'applyUrl',
    applicationContact: 'applicationContact',
    applicationDeadline: 'applicationDeadline',
    directApply: 'directApply',
    category: 'category',
    seniority: 'seniority',
    isActive: 'isActive',
    whoShouldApply: 'whoShouldApply',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    legalName?: StringNullableFilter<"Company"> | string | null
    url?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    logo?: StringNullableFilter<"Company"> | string | null
    image?: StringNullableFilter<"Company"> | string | null
    streetAddress?: StringNullableFilter<"Company"> | string | null
    addressLocality?: StringNullableFilter<"Company"> | string | null
    addressRegion?: StringNullableFilter<"Company"> | string | null
    postalCode?: StringNullableFilter<"Company"> | string | null
    addressCountry?: StringNullableFilter<"Company"> | string | null
    telephone?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    contactType?: StringNullableFilter<"Company"> | string | null
    areaServed?: StringNullableFilter<"Company"> | string | null
    availableLanguage?: StringNullableFilter<"Company"> | string | null
    sameAs?: StringNullableFilter<"Company"> | string | null
    taxID?: StringNullableFilter<"Company"> | string | null
    vatID?: StringNullableFilter<"Company"> | string | null
    duns?: StringNullableFilter<"Company"> | string | null
    leiCode?: StringNullableFilter<"Company"> | string | null
    iso6523Code?: StringNullableFilter<"Company"> | string | null
    foundingDate?: StringNullableFilter<"Company"> | string | null
    foundingLocation?: StringNullableFilter<"Company"> | string | null
    numberOfEmployees?: StringNullableFilter<"Company"> | string | null
    parentOrganization?: StringNullableFilter<"Company"> | string | null
    subOrganization?: StringNullableFilter<"Company"> | string | null
    award?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    jobs?: JobListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    streetAddress?: SortOrderInput | SortOrder
    addressLocality?: SortOrderInput | SortOrder
    addressRegion?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    addressCountry?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contactType?: SortOrderInput | SortOrder
    areaServed?: SortOrderInput | SortOrder
    availableLanguage?: SortOrderInput | SortOrder
    sameAs?: SortOrderInput | SortOrder
    taxID?: SortOrderInput | SortOrder
    vatID?: SortOrderInput | SortOrder
    duns?: SortOrderInput | SortOrder
    leiCode?: SortOrderInput | SortOrder
    iso6523Code?: SortOrderInput | SortOrder
    foundingDate?: SortOrderInput | SortOrder
    foundingLocation?: SortOrderInput | SortOrder
    numberOfEmployees?: SortOrderInput | SortOrder
    parentOrganization?: SortOrderInput | SortOrder
    subOrganization?: SortOrderInput | SortOrder
    award?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobs?: JobOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    legalName?: StringNullableFilter<"Company"> | string | null
    url?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    logo?: StringNullableFilter<"Company"> | string | null
    image?: StringNullableFilter<"Company"> | string | null
    streetAddress?: StringNullableFilter<"Company"> | string | null
    addressLocality?: StringNullableFilter<"Company"> | string | null
    addressRegion?: StringNullableFilter<"Company"> | string | null
    postalCode?: StringNullableFilter<"Company"> | string | null
    addressCountry?: StringNullableFilter<"Company"> | string | null
    telephone?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    contactType?: StringNullableFilter<"Company"> | string | null
    areaServed?: StringNullableFilter<"Company"> | string | null
    availableLanguage?: StringNullableFilter<"Company"> | string | null
    sameAs?: StringNullableFilter<"Company"> | string | null
    taxID?: StringNullableFilter<"Company"> | string | null
    vatID?: StringNullableFilter<"Company"> | string | null
    duns?: StringNullableFilter<"Company"> | string | null
    leiCode?: StringNullableFilter<"Company"> | string | null
    iso6523Code?: StringNullableFilter<"Company"> | string | null
    foundingDate?: StringNullableFilter<"Company"> | string | null
    foundingLocation?: StringNullableFilter<"Company"> | string | null
    numberOfEmployees?: StringNullableFilter<"Company"> | string | null
    parentOrganization?: StringNullableFilter<"Company"> | string | null
    subOrganization?: StringNullableFilter<"Company"> | string | null
    award?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    jobs?: JobListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    streetAddress?: SortOrderInput | SortOrder
    addressLocality?: SortOrderInput | SortOrder
    addressRegion?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    addressCountry?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contactType?: SortOrderInput | SortOrder
    areaServed?: SortOrderInput | SortOrder
    availableLanguage?: SortOrderInput | SortOrder
    sameAs?: SortOrderInput | SortOrder
    taxID?: SortOrderInput | SortOrder
    vatID?: SortOrderInput | SortOrder
    duns?: SortOrderInput | SortOrder
    leiCode?: SortOrderInput | SortOrder
    iso6523Code?: SortOrderInput | SortOrder
    foundingDate?: SortOrderInput | SortOrder
    foundingLocation?: SortOrderInput | SortOrder
    numberOfEmployees?: SortOrderInput | SortOrder
    parentOrganization?: SortOrderInput | SortOrder
    subOrganization?: SortOrderInput | SortOrder
    award?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    legalName?: StringNullableWithAggregatesFilter<"Company"> | string | null
    url?: StringNullableWithAggregatesFilter<"Company"> | string | null
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    image?: StringNullableWithAggregatesFilter<"Company"> | string | null
    streetAddress?: StringNullableWithAggregatesFilter<"Company"> | string | null
    addressLocality?: StringNullableWithAggregatesFilter<"Company"> | string | null
    addressRegion?: StringNullableWithAggregatesFilter<"Company"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Company"> | string | null
    addressCountry?: StringNullableWithAggregatesFilter<"Company"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    contactType?: StringNullableWithAggregatesFilter<"Company"> | string | null
    areaServed?: StringNullableWithAggregatesFilter<"Company"> | string | null
    availableLanguage?: StringNullableWithAggregatesFilter<"Company"> | string | null
    sameAs?: StringNullableWithAggregatesFilter<"Company"> | string | null
    taxID?: StringNullableWithAggregatesFilter<"Company"> | string | null
    vatID?: StringNullableWithAggregatesFilter<"Company"> | string | null
    duns?: StringNullableWithAggregatesFilter<"Company"> | string | null
    leiCode?: StringNullableWithAggregatesFilter<"Company"> | string | null
    iso6523Code?: StringNullableWithAggregatesFilter<"Company"> | string | null
    foundingDate?: StringNullableWithAggregatesFilter<"Company"> | string | null
    foundingLocation?: StringNullableWithAggregatesFilter<"Company"> | string | null
    numberOfEmployees?: StringNullableWithAggregatesFilter<"Company"> | string | null
    parentOrganization?: StringNullableWithAggregatesFilter<"Company"> | string | null
    subOrganization?: StringNullableWithAggregatesFilter<"Company"> | string | null
    award?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringNullableFilter<"Job"> | string | null
    identifier?: StringNullableFilter<"Job"> | string | null
    jobId?: StringNullableFilter<"Job"> | string | null
    slug?: StringFilter<"Job"> | string
    datePosted?: StringNullableFilter<"Job"> | string | null
    validThrough?: StringNullableFilter<"Job"> | string | null
    dateModified?: StringNullableFilter<"Job"> | string | null
    companyId?: IntNullableFilter<"Job"> | number | null
    hiringOrgName?: StringNullableFilter<"Job"> | string | null
    hiringOrgUrl?: StringNullableFilter<"Job"> | string | null
    hiringOrgLogo?: StringNullableFilter<"Job"> | string | null
    hiringOrgSameAs?: StringNullableFilter<"Job"> | string | null
    streetAddress?: StringNullableFilter<"Job"> | string | null
    addressLocality?: StringNullableFilter<"Job"> | string | null
    addressRegion?: StringNullableFilter<"Job"> | string | null
    postalCode?: StringNullableFilter<"Job"> | string | null
    addressCountry?: StringNullableFilter<"Job"> | string | null
    jobLocationType?: StringNullableFilter<"Job"> | string | null
    applicantLocationRequirements?: StringNullableFilter<"Job"> | string | null
    employmentType?: StringNullableFilter<"Job"> | string | null
    workHours?: StringNullableFilter<"Job"> | string | null
    jobStartDate?: StringNullableFilter<"Job"> | string | null
    jobDuration?: StringNullableFilter<"Job"> | string | null
    jobImmediateStart?: BoolNullableFilter<"Job"> | boolean | null
    totalJobOpenings?: IntNullableFilter<"Job"> | number | null
    employmentUnit?: StringNullableFilter<"Job"> | string | null
    salaryValue?: StringNullableFilter<"Job"> | string | null
    baseSalary?: StringNullableFilter<"Job"> | string | null
    salaryCurrency?: StringNullableFilter<"Job"> | string | null
    salaryUnitText?: StringNullableFilter<"Job"> | string | null
    estimatedSalary?: StringNullableFilter<"Job"> | string | null
    educationRequirements?: StringNullableFilter<"Job"> | string | null
    experienceRequirements?: StringNullableFilter<"Job"> | string | null
    experienceInPlaceOfEducation?: BoolNullableFilter<"Job"> | boolean | null
    qualifications?: StringNullableFilter<"Job"> | string | null
    skills?: StringNullableFilter<"Job"> | string | null
    physicalRequirement?: StringNullableFilter<"Job"> | string | null
    sensoryRequirement?: StringNullableFilter<"Job"> | string | null
    securityClearanceRequirement?: StringNullableFilter<"Job"> | string | null
    responsibilities?: StringNullableFilter<"Job"> | string | null
    industry?: StringNullableFilter<"Job"> | string | null
    occupationalCategory?: StringNullableFilter<"Job"> | string | null
    specialCommitments?: StringNullableFilter<"Job"> | string | null
    incentives?: StringNullableFilter<"Job"> | string | null
    incentiveCompensation?: StringNullableFilter<"Job"> | string | null
    benefits?: StringNullableFilter<"Job"> | string | null
    jobBenefits?: StringNullableFilter<"Job"> | string | null
    applyUrl?: StringNullableFilter<"Job"> | string | null
    applicationContact?: StringNullableFilter<"Job"> | string | null
    applicationDeadline?: StringNullableFilter<"Job"> | string | null
    directApply?: BoolNullableFilter<"Job"> | boolean | null
    category?: StringNullableFilter<"Job"> | string | null
    seniority?: StringNullableFilter<"Job"> | string | null
    isActive?: BoolFilter<"Job"> | boolean
    whoShouldApply?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    identifier?: SortOrderInput | SortOrder
    jobId?: SortOrderInput | SortOrder
    slug?: SortOrder
    datePosted?: SortOrderInput | SortOrder
    validThrough?: SortOrderInput | SortOrder
    dateModified?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    hiringOrgName?: SortOrderInput | SortOrder
    hiringOrgUrl?: SortOrderInput | SortOrder
    hiringOrgLogo?: SortOrderInput | SortOrder
    hiringOrgSameAs?: SortOrderInput | SortOrder
    streetAddress?: SortOrderInput | SortOrder
    addressLocality?: SortOrderInput | SortOrder
    addressRegion?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    addressCountry?: SortOrderInput | SortOrder
    jobLocationType?: SortOrderInput | SortOrder
    applicantLocationRequirements?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    workHours?: SortOrderInput | SortOrder
    jobStartDate?: SortOrderInput | SortOrder
    jobDuration?: SortOrderInput | SortOrder
    jobImmediateStart?: SortOrderInput | SortOrder
    totalJobOpenings?: SortOrderInput | SortOrder
    employmentUnit?: SortOrderInput | SortOrder
    salaryValue?: SortOrderInput | SortOrder
    baseSalary?: SortOrderInput | SortOrder
    salaryCurrency?: SortOrderInput | SortOrder
    salaryUnitText?: SortOrderInput | SortOrder
    estimatedSalary?: SortOrderInput | SortOrder
    educationRequirements?: SortOrderInput | SortOrder
    experienceRequirements?: SortOrderInput | SortOrder
    experienceInPlaceOfEducation?: SortOrderInput | SortOrder
    qualifications?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    physicalRequirement?: SortOrderInput | SortOrder
    sensoryRequirement?: SortOrderInput | SortOrder
    securityClearanceRequirement?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    occupationalCategory?: SortOrderInput | SortOrder
    specialCommitments?: SortOrderInput | SortOrder
    incentives?: SortOrderInput | SortOrder
    incentiveCompensation?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    jobBenefits?: SortOrderInput | SortOrder
    applyUrl?: SortOrderInput | SortOrder
    applicationContact?: SortOrderInput | SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    directApply?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    seniority?: SortOrderInput | SortOrder
    isActive?: SortOrder
    whoShouldApply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    description?: StringNullableFilter<"Job"> | string | null
    identifier?: StringNullableFilter<"Job"> | string | null
    jobId?: StringNullableFilter<"Job"> | string | null
    datePosted?: StringNullableFilter<"Job"> | string | null
    validThrough?: StringNullableFilter<"Job"> | string | null
    dateModified?: StringNullableFilter<"Job"> | string | null
    companyId?: IntNullableFilter<"Job"> | number | null
    hiringOrgName?: StringNullableFilter<"Job"> | string | null
    hiringOrgUrl?: StringNullableFilter<"Job"> | string | null
    hiringOrgLogo?: StringNullableFilter<"Job"> | string | null
    hiringOrgSameAs?: StringNullableFilter<"Job"> | string | null
    streetAddress?: StringNullableFilter<"Job"> | string | null
    addressLocality?: StringNullableFilter<"Job"> | string | null
    addressRegion?: StringNullableFilter<"Job"> | string | null
    postalCode?: StringNullableFilter<"Job"> | string | null
    addressCountry?: StringNullableFilter<"Job"> | string | null
    jobLocationType?: StringNullableFilter<"Job"> | string | null
    applicantLocationRequirements?: StringNullableFilter<"Job"> | string | null
    employmentType?: StringNullableFilter<"Job"> | string | null
    workHours?: StringNullableFilter<"Job"> | string | null
    jobStartDate?: StringNullableFilter<"Job"> | string | null
    jobDuration?: StringNullableFilter<"Job"> | string | null
    jobImmediateStart?: BoolNullableFilter<"Job"> | boolean | null
    totalJobOpenings?: IntNullableFilter<"Job"> | number | null
    employmentUnit?: StringNullableFilter<"Job"> | string | null
    salaryValue?: StringNullableFilter<"Job"> | string | null
    baseSalary?: StringNullableFilter<"Job"> | string | null
    salaryCurrency?: StringNullableFilter<"Job"> | string | null
    salaryUnitText?: StringNullableFilter<"Job"> | string | null
    estimatedSalary?: StringNullableFilter<"Job"> | string | null
    educationRequirements?: StringNullableFilter<"Job"> | string | null
    experienceRequirements?: StringNullableFilter<"Job"> | string | null
    experienceInPlaceOfEducation?: BoolNullableFilter<"Job"> | boolean | null
    qualifications?: StringNullableFilter<"Job"> | string | null
    skills?: StringNullableFilter<"Job"> | string | null
    physicalRequirement?: StringNullableFilter<"Job"> | string | null
    sensoryRequirement?: StringNullableFilter<"Job"> | string | null
    securityClearanceRequirement?: StringNullableFilter<"Job"> | string | null
    responsibilities?: StringNullableFilter<"Job"> | string | null
    industry?: StringNullableFilter<"Job"> | string | null
    occupationalCategory?: StringNullableFilter<"Job"> | string | null
    specialCommitments?: StringNullableFilter<"Job"> | string | null
    incentives?: StringNullableFilter<"Job"> | string | null
    incentiveCompensation?: StringNullableFilter<"Job"> | string | null
    benefits?: StringNullableFilter<"Job"> | string | null
    jobBenefits?: StringNullableFilter<"Job"> | string | null
    applyUrl?: StringNullableFilter<"Job"> | string | null
    applicationContact?: StringNullableFilter<"Job"> | string | null
    applicationDeadline?: StringNullableFilter<"Job"> | string | null
    directApply?: BoolNullableFilter<"Job"> | boolean | null
    category?: StringNullableFilter<"Job"> | string | null
    seniority?: StringNullableFilter<"Job"> | string | null
    isActive?: BoolFilter<"Job"> | boolean
    whoShouldApply?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "slug">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    identifier?: SortOrderInput | SortOrder
    jobId?: SortOrderInput | SortOrder
    slug?: SortOrder
    datePosted?: SortOrderInput | SortOrder
    validThrough?: SortOrderInput | SortOrder
    dateModified?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    hiringOrgName?: SortOrderInput | SortOrder
    hiringOrgUrl?: SortOrderInput | SortOrder
    hiringOrgLogo?: SortOrderInput | SortOrder
    hiringOrgSameAs?: SortOrderInput | SortOrder
    streetAddress?: SortOrderInput | SortOrder
    addressLocality?: SortOrderInput | SortOrder
    addressRegion?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    addressCountry?: SortOrderInput | SortOrder
    jobLocationType?: SortOrderInput | SortOrder
    applicantLocationRequirements?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    workHours?: SortOrderInput | SortOrder
    jobStartDate?: SortOrderInput | SortOrder
    jobDuration?: SortOrderInput | SortOrder
    jobImmediateStart?: SortOrderInput | SortOrder
    totalJobOpenings?: SortOrderInput | SortOrder
    employmentUnit?: SortOrderInput | SortOrder
    salaryValue?: SortOrderInput | SortOrder
    baseSalary?: SortOrderInput | SortOrder
    salaryCurrency?: SortOrderInput | SortOrder
    salaryUnitText?: SortOrderInput | SortOrder
    estimatedSalary?: SortOrderInput | SortOrder
    educationRequirements?: SortOrderInput | SortOrder
    experienceRequirements?: SortOrderInput | SortOrder
    experienceInPlaceOfEducation?: SortOrderInput | SortOrder
    qualifications?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    physicalRequirement?: SortOrderInput | SortOrder
    sensoryRequirement?: SortOrderInput | SortOrder
    securityClearanceRequirement?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    occupationalCategory?: SortOrderInput | SortOrder
    specialCommitments?: SortOrderInput | SortOrder
    incentives?: SortOrderInput | SortOrder
    incentiveCompensation?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    jobBenefits?: SortOrderInput | SortOrder
    applyUrl?: SortOrderInput | SortOrder
    applicationContact?: SortOrderInput | SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    directApply?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    seniority?: SortOrderInput | SortOrder
    isActive?: SortOrder
    whoShouldApply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringNullableWithAggregatesFilter<"Job"> | string | null
    identifier?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobId?: StringNullableWithAggregatesFilter<"Job"> | string | null
    slug?: StringWithAggregatesFilter<"Job"> | string
    datePosted?: StringNullableWithAggregatesFilter<"Job"> | string | null
    validThrough?: StringNullableWithAggregatesFilter<"Job"> | string | null
    dateModified?: StringNullableWithAggregatesFilter<"Job"> | string | null
    companyId?: IntNullableWithAggregatesFilter<"Job"> | number | null
    hiringOrgName?: StringNullableWithAggregatesFilter<"Job"> | string | null
    hiringOrgUrl?: StringNullableWithAggregatesFilter<"Job"> | string | null
    hiringOrgLogo?: StringNullableWithAggregatesFilter<"Job"> | string | null
    hiringOrgSameAs?: StringNullableWithAggregatesFilter<"Job"> | string | null
    streetAddress?: StringNullableWithAggregatesFilter<"Job"> | string | null
    addressLocality?: StringNullableWithAggregatesFilter<"Job"> | string | null
    addressRegion?: StringNullableWithAggregatesFilter<"Job"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Job"> | string | null
    addressCountry?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobLocationType?: StringNullableWithAggregatesFilter<"Job"> | string | null
    applicantLocationRequirements?: StringNullableWithAggregatesFilter<"Job"> | string | null
    employmentType?: StringNullableWithAggregatesFilter<"Job"> | string | null
    workHours?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobStartDate?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobDuration?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobImmediateStart?: BoolNullableWithAggregatesFilter<"Job"> | boolean | null
    totalJobOpenings?: IntNullableWithAggregatesFilter<"Job"> | number | null
    employmentUnit?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salaryValue?: StringNullableWithAggregatesFilter<"Job"> | string | null
    baseSalary?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salaryCurrency?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salaryUnitText?: StringNullableWithAggregatesFilter<"Job"> | string | null
    estimatedSalary?: StringNullableWithAggregatesFilter<"Job"> | string | null
    educationRequirements?: StringNullableWithAggregatesFilter<"Job"> | string | null
    experienceRequirements?: StringNullableWithAggregatesFilter<"Job"> | string | null
    experienceInPlaceOfEducation?: BoolNullableWithAggregatesFilter<"Job"> | boolean | null
    qualifications?: StringNullableWithAggregatesFilter<"Job"> | string | null
    skills?: StringNullableWithAggregatesFilter<"Job"> | string | null
    physicalRequirement?: StringNullableWithAggregatesFilter<"Job"> | string | null
    sensoryRequirement?: StringNullableWithAggregatesFilter<"Job"> | string | null
    securityClearanceRequirement?: StringNullableWithAggregatesFilter<"Job"> | string | null
    responsibilities?: StringNullableWithAggregatesFilter<"Job"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Job"> | string | null
    occupationalCategory?: StringNullableWithAggregatesFilter<"Job"> | string | null
    specialCommitments?: StringNullableWithAggregatesFilter<"Job"> | string | null
    incentives?: StringNullableWithAggregatesFilter<"Job"> | string | null
    incentiveCompensation?: StringNullableWithAggregatesFilter<"Job"> | string | null
    benefits?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobBenefits?: StringNullableWithAggregatesFilter<"Job"> | string | null
    applyUrl?: StringNullableWithAggregatesFilter<"Job"> | string | null
    applicationContact?: StringNullableWithAggregatesFilter<"Job"> | string | null
    applicationDeadline?: StringNullableWithAggregatesFilter<"Job"> | string | null
    directApply?: BoolNullableWithAggregatesFilter<"Job"> | boolean | null
    category?: StringNullableWithAggregatesFilter<"Job"> | string | null
    seniority?: StringNullableWithAggregatesFilter<"Job"> | string | null
    isActive?: BoolWithAggregatesFilter<"Job"> | boolean
    whoShouldApply?: StringNullableWithAggregatesFilter<"Job"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    legalName?: string | null
    url?: string | null
    description?: string | null
    logo?: string | null
    image?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    telephone?: string | null
    email?: string | null
    contactType?: string | null
    areaServed?: string | null
    availableLanguage?: string | null
    sameAs?: string | null
    taxID?: string | null
    vatID?: string | null
    duns?: string | null
    leiCode?: string | null
    iso6523Code?: string | null
    foundingDate?: string | null
    foundingLocation?: string | null
    numberOfEmployees?: string | null
    parentOrganization?: string | null
    subOrganization?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    legalName?: string | null
    url?: string | null
    description?: string | null
    logo?: string | null
    image?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    telephone?: string | null
    email?: string | null
    contactType?: string | null
    areaServed?: string | null
    availableLanguage?: string | null
    sameAs?: string | null
    taxID?: string | null
    vatID?: string | null
    duns?: string | null
    leiCode?: string | null
    iso6523Code?: string | null
    foundingDate?: string | null
    foundingLocation?: string | null
    numberOfEmployees?: string | null
    parentOrganization?: string | null
    subOrganization?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: NullableStringFieldUpdateOperationsInput | string | null
    areaServed?: NullableStringFieldUpdateOperationsInput | string | null
    availableLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    sameAs?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    vatID?: NullableStringFieldUpdateOperationsInput | string | null
    duns?: NullableStringFieldUpdateOperationsInput | string | null
    leiCode?: NullableStringFieldUpdateOperationsInput | string | null
    iso6523Code?: NullableStringFieldUpdateOperationsInput | string | null
    foundingDate?: NullableStringFieldUpdateOperationsInput | string | null
    foundingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableStringFieldUpdateOperationsInput | string | null
    parentOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    subOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: NullableStringFieldUpdateOperationsInput | string | null
    areaServed?: NullableStringFieldUpdateOperationsInput | string | null
    availableLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    sameAs?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    vatID?: NullableStringFieldUpdateOperationsInput | string | null
    duns?: NullableStringFieldUpdateOperationsInput | string | null
    leiCode?: NullableStringFieldUpdateOperationsInput | string | null
    iso6523Code?: NullableStringFieldUpdateOperationsInput | string | null
    foundingDate?: NullableStringFieldUpdateOperationsInput | string | null
    foundingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableStringFieldUpdateOperationsInput | string | null
    parentOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    subOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    legalName?: string | null
    url?: string | null
    description?: string | null
    logo?: string | null
    image?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    telephone?: string | null
    email?: string | null
    contactType?: string | null
    areaServed?: string | null
    availableLanguage?: string | null
    sameAs?: string | null
    taxID?: string | null
    vatID?: string | null
    duns?: string | null
    leiCode?: string | null
    iso6523Code?: string | null
    foundingDate?: string | null
    foundingLocation?: string | null
    numberOfEmployees?: string | null
    parentOrganization?: string | null
    subOrganization?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: NullableStringFieldUpdateOperationsInput | string | null
    areaServed?: NullableStringFieldUpdateOperationsInput | string | null
    availableLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    sameAs?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    vatID?: NullableStringFieldUpdateOperationsInput | string | null
    duns?: NullableStringFieldUpdateOperationsInput | string | null
    leiCode?: NullableStringFieldUpdateOperationsInput | string | null
    iso6523Code?: NullableStringFieldUpdateOperationsInput | string | null
    foundingDate?: NullableStringFieldUpdateOperationsInput | string | null
    foundingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableStringFieldUpdateOperationsInput | string | null
    parentOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    subOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: NullableStringFieldUpdateOperationsInput | string | null
    areaServed?: NullableStringFieldUpdateOperationsInput | string | null
    availableLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    sameAs?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    vatID?: NullableStringFieldUpdateOperationsInput | string | null
    duns?: NullableStringFieldUpdateOperationsInput | string | null
    leiCode?: NullableStringFieldUpdateOperationsInput | string | null
    iso6523Code?: NullableStringFieldUpdateOperationsInput | string | null
    foundingDate?: NullableStringFieldUpdateOperationsInput | string | null
    foundingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableStringFieldUpdateOperationsInput | string | null
    parentOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    subOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    title: string
    description?: string | null
    identifier?: string | null
    jobId?: string | null
    slug: string
    datePosted?: string | null
    validThrough?: string | null
    dateModified?: string | null
    hiringOrgName?: string | null
    hiringOrgUrl?: string | null
    hiringOrgLogo?: string | null
    hiringOrgSameAs?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    jobLocationType?: string | null
    applicantLocationRequirements?: string | null
    employmentType?: string | null
    workHours?: string | null
    jobStartDate?: string | null
    jobDuration?: string | null
    jobImmediateStart?: boolean | null
    totalJobOpenings?: number | null
    employmentUnit?: string | null
    salaryValue?: string | null
    baseSalary?: string | null
    salaryCurrency?: string | null
    salaryUnitText?: string | null
    estimatedSalary?: string | null
    educationRequirements?: string | null
    experienceRequirements?: string | null
    experienceInPlaceOfEducation?: boolean | null
    qualifications?: string | null
    skills?: string | null
    physicalRequirement?: string | null
    sensoryRequirement?: string | null
    securityClearanceRequirement?: string | null
    responsibilities?: string | null
    industry?: string | null
    occupationalCategory?: string | null
    specialCommitments?: string | null
    incentives?: string | null
    incentiveCompensation?: string | null
    benefits?: string | null
    jobBenefits?: string | null
    applyUrl?: string | null
    applicationContact?: string | null
    applicationDeadline?: string | null
    directApply?: boolean | null
    category?: string | null
    seniority?: string | null
    isActive?: boolean
    whoShouldApply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    identifier?: string | null
    jobId?: string | null
    slug: string
    datePosted?: string | null
    validThrough?: string | null
    dateModified?: string | null
    companyId?: number | null
    hiringOrgName?: string | null
    hiringOrgUrl?: string | null
    hiringOrgLogo?: string | null
    hiringOrgSameAs?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    jobLocationType?: string | null
    applicantLocationRequirements?: string | null
    employmentType?: string | null
    workHours?: string | null
    jobStartDate?: string | null
    jobDuration?: string | null
    jobImmediateStart?: boolean | null
    totalJobOpenings?: number | null
    employmentUnit?: string | null
    salaryValue?: string | null
    baseSalary?: string | null
    salaryCurrency?: string | null
    salaryUnitText?: string | null
    estimatedSalary?: string | null
    educationRequirements?: string | null
    experienceRequirements?: string | null
    experienceInPlaceOfEducation?: boolean | null
    qualifications?: string | null
    skills?: string | null
    physicalRequirement?: string | null
    sensoryRequirement?: string | null
    securityClearanceRequirement?: string | null
    responsibilities?: string | null
    industry?: string | null
    occupationalCategory?: string | null
    specialCommitments?: string | null
    incentives?: string | null
    incentiveCompensation?: string | null
    benefits?: string | null
    jobBenefits?: string | null
    applyUrl?: string | null
    applicationContact?: string | null
    applicationDeadline?: string | null
    directApply?: boolean | null
    category?: string | null
    seniority?: string | null
    isActive?: boolean
    whoShouldApply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    datePosted?: NullableStringFieldUpdateOperationsInput | string | null
    validThrough?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgLogo?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgSameAs?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    jobLocationType?: NullableStringFieldUpdateOperationsInput | string | null
    applicantLocationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    workHours?: NullableStringFieldUpdateOperationsInput | string | null
    jobStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    jobDuration?: NullableStringFieldUpdateOperationsInput | string | null
    jobImmediateStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalJobOpenings?: NullableIntFieldUpdateOperationsInput | number | null
    employmentUnit?: NullableStringFieldUpdateOperationsInput | string | null
    salaryValue?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableStringFieldUpdateOperationsInput | string | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryUnitText?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    educationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceInPlaceOfEducation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    physicalRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    sensoryRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    securityClearanceRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    occupationalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialCommitments?: NullableStringFieldUpdateOperationsInput | string | null
    incentives?: NullableStringFieldUpdateOperationsInput | string | null
    incentiveCompensation?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    jobBenefits?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationContact?: NullableStringFieldUpdateOperationsInput | string | null
    applicationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    directApply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    seniority?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    whoShouldApply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    datePosted?: NullableStringFieldUpdateOperationsInput | string | null
    validThrough?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    hiringOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgLogo?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgSameAs?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    jobLocationType?: NullableStringFieldUpdateOperationsInput | string | null
    applicantLocationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    workHours?: NullableStringFieldUpdateOperationsInput | string | null
    jobStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    jobDuration?: NullableStringFieldUpdateOperationsInput | string | null
    jobImmediateStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalJobOpenings?: NullableIntFieldUpdateOperationsInput | number | null
    employmentUnit?: NullableStringFieldUpdateOperationsInput | string | null
    salaryValue?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableStringFieldUpdateOperationsInput | string | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryUnitText?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    educationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceInPlaceOfEducation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    physicalRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    sensoryRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    securityClearanceRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    occupationalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialCommitments?: NullableStringFieldUpdateOperationsInput | string | null
    incentives?: NullableStringFieldUpdateOperationsInput | string | null
    incentiveCompensation?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    jobBenefits?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationContact?: NullableStringFieldUpdateOperationsInput | string | null
    applicationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    directApply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    seniority?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    whoShouldApply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    identifier?: string | null
    jobId?: string | null
    slug: string
    datePosted?: string | null
    validThrough?: string | null
    dateModified?: string | null
    companyId?: number | null
    hiringOrgName?: string | null
    hiringOrgUrl?: string | null
    hiringOrgLogo?: string | null
    hiringOrgSameAs?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    jobLocationType?: string | null
    applicantLocationRequirements?: string | null
    employmentType?: string | null
    workHours?: string | null
    jobStartDate?: string | null
    jobDuration?: string | null
    jobImmediateStart?: boolean | null
    totalJobOpenings?: number | null
    employmentUnit?: string | null
    salaryValue?: string | null
    baseSalary?: string | null
    salaryCurrency?: string | null
    salaryUnitText?: string | null
    estimatedSalary?: string | null
    educationRequirements?: string | null
    experienceRequirements?: string | null
    experienceInPlaceOfEducation?: boolean | null
    qualifications?: string | null
    skills?: string | null
    physicalRequirement?: string | null
    sensoryRequirement?: string | null
    securityClearanceRequirement?: string | null
    responsibilities?: string | null
    industry?: string | null
    occupationalCategory?: string | null
    specialCommitments?: string | null
    incentives?: string | null
    incentiveCompensation?: string | null
    benefits?: string | null
    jobBenefits?: string | null
    applyUrl?: string | null
    applicationContact?: string | null
    applicationDeadline?: string | null
    directApply?: boolean | null
    category?: string | null
    seniority?: string | null
    isActive?: boolean
    whoShouldApply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    datePosted?: NullableStringFieldUpdateOperationsInput | string | null
    validThrough?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgLogo?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgSameAs?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    jobLocationType?: NullableStringFieldUpdateOperationsInput | string | null
    applicantLocationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    workHours?: NullableStringFieldUpdateOperationsInput | string | null
    jobStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    jobDuration?: NullableStringFieldUpdateOperationsInput | string | null
    jobImmediateStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalJobOpenings?: NullableIntFieldUpdateOperationsInput | number | null
    employmentUnit?: NullableStringFieldUpdateOperationsInput | string | null
    salaryValue?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableStringFieldUpdateOperationsInput | string | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryUnitText?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    educationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceInPlaceOfEducation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    physicalRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    sensoryRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    securityClearanceRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    occupationalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialCommitments?: NullableStringFieldUpdateOperationsInput | string | null
    incentives?: NullableStringFieldUpdateOperationsInput | string | null
    incentiveCompensation?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    jobBenefits?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationContact?: NullableStringFieldUpdateOperationsInput | string | null
    applicationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    directApply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    seniority?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    whoShouldApply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    datePosted?: NullableStringFieldUpdateOperationsInput | string | null
    validThrough?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    hiringOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgLogo?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgSameAs?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    jobLocationType?: NullableStringFieldUpdateOperationsInput | string | null
    applicantLocationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    workHours?: NullableStringFieldUpdateOperationsInput | string | null
    jobStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    jobDuration?: NullableStringFieldUpdateOperationsInput | string | null
    jobImmediateStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalJobOpenings?: NullableIntFieldUpdateOperationsInput | number | null
    employmentUnit?: NullableStringFieldUpdateOperationsInput | string | null
    salaryValue?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableStringFieldUpdateOperationsInput | string | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryUnitText?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    educationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceInPlaceOfEducation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    physicalRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    sensoryRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    securityClearanceRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    occupationalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialCommitments?: NullableStringFieldUpdateOperationsInput | string | null
    incentives?: NullableStringFieldUpdateOperationsInput | string | null
    incentiveCompensation?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    jobBenefits?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationContact?: NullableStringFieldUpdateOperationsInput | string | null
    applicationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    directApply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    seniority?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    whoShouldApply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    url?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    streetAddress?: SortOrder
    addressLocality?: SortOrder
    addressRegion?: SortOrder
    postalCode?: SortOrder
    addressCountry?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    contactType?: SortOrder
    areaServed?: SortOrder
    availableLanguage?: SortOrder
    sameAs?: SortOrder
    taxID?: SortOrder
    vatID?: SortOrder
    duns?: SortOrder
    leiCode?: SortOrder
    iso6523Code?: SortOrder
    foundingDate?: SortOrder
    foundingLocation?: SortOrder
    numberOfEmployees?: SortOrder
    parentOrganization?: SortOrder
    subOrganization?: SortOrder
    award?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    url?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    streetAddress?: SortOrder
    addressLocality?: SortOrder
    addressRegion?: SortOrder
    postalCode?: SortOrder
    addressCountry?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    contactType?: SortOrder
    areaServed?: SortOrder
    availableLanguage?: SortOrder
    sameAs?: SortOrder
    taxID?: SortOrder
    vatID?: SortOrder
    duns?: SortOrder
    leiCode?: SortOrder
    iso6523Code?: SortOrder
    foundingDate?: SortOrder
    foundingLocation?: SortOrder
    numberOfEmployees?: SortOrder
    parentOrganization?: SortOrder
    subOrganization?: SortOrder
    award?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    url?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    streetAddress?: SortOrder
    addressLocality?: SortOrder
    addressRegion?: SortOrder
    postalCode?: SortOrder
    addressCountry?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    contactType?: SortOrder
    areaServed?: SortOrder
    availableLanguage?: SortOrder
    sameAs?: SortOrder
    taxID?: SortOrder
    vatID?: SortOrder
    duns?: SortOrder
    leiCode?: SortOrder
    iso6523Code?: SortOrder
    foundingDate?: SortOrder
    foundingLocation?: SortOrder
    numberOfEmployees?: SortOrder
    parentOrganization?: SortOrder
    subOrganization?: SortOrder
    award?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    identifier?: SortOrder
    jobId?: SortOrder
    slug?: SortOrder
    datePosted?: SortOrder
    validThrough?: SortOrder
    dateModified?: SortOrder
    companyId?: SortOrder
    hiringOrgName?: SortOrder
    hiringOrgUrl?: SortOrder
    hiringOrgLogo?: SortOrder
    hiringOrgSameAs?: SortOrder
    streetAddress?: SortOrder
    addressLocality?: SortOrder
    addressRegion?: SortOrder
    postalCode?: SortOrder
    addressCountry?: SortOrder
    jobLocationType?: SortOrder
    applicantLocationRequirements?: SortOrder
    employmentType?: SortOrder
    workHours?: SortOrder
    jobStartDate?: SortOrder
    jobDuration?: SortOrder
    jobImmediateStart?: SortOrder
    totalJobOpenings?: SortOrder
    employmentUnit?: SortOrder
    salaryValue?: SortOrder
    baseSalary?: SortOrder
    salaryCurrency?: SortOrder
    salaryUnitText?: SortOrder
    estimatedSalary?: SortOrder
    educationRequirements?: SortOrder
    experienceRequirements?: SortOrder
    experienceInPlaceOfEducation?: SortOrder
    qualifications?: SortOrder
    skills?: SortOrder
    physicalRequirement?: SortOrder
    sensoryRequirement?: SortOrder
    securityClearanceRequirement?: SortOrder
    responsibilities?: SortOrder
    industry?: SortOrder
    occupationalCategory?: SortOrder
    specialCommitments?: SortOrder
    incentives?: SortOrder
    incentiveCompensation?: SortOrder
    benefits?: SortOrder
    jobBenefits?: SortOrder
    applyUrl?: SortOrder
    applicationContact?: SortOrder
    applicationDeadline?: SortOrder
    directApply?: SortOrder
    category?: SortOrder
    seniority?: SortOrder
    isActive?: SortOrder
    whoShouldApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    totalJobOpenings?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    identifier?: SortOrder
    jobId?: SortOrder
    slug?: SortOrder
    datePosted?: SortOrder
    validThrough?: SortOrder
    dateModified?: SortOrder
    companyId?: SortOrder
    hiringOrgName?: SortOrder
    hiringOrgUrl?: SortOrder
    hiringOrgLogo?: SortOrder
    hiringOrgSameAs?: SortOrder
    streetAddress?: SortOrder
    addressLocality?: SortOrder
    addressRegion?: SortOrder
    postalCode?: SortOrder
    addressCountry?: SortOrder
    jobLocationType?: SortOrder
    applicantLocationRequirements?: SortOrder
    employmentType?: SortOrder
    workHours?: SortOrder
    jobStartDate?: SortOrder
    jobDuration?: SortOrder
    jobImmediateStart?: SortOrder
    totalJobOpenings?: SortOrder
    employmentUnit?: SortOrder
    salaryValue?: SortOrder
    baseSalary?: SortOrder
    salaryCurrency?: SortOrder
    salaryUnitText?: SortOrder
    estimatedSalary?: SortOrder
    educationRequirements?: SortOrder
    experienceRequirements?: SortOrder
    experienceInPlaceOfEducation?: SortOrder
    qualifications?: SortOrder
    skills?: SortOrder
    physicalRequirement?: SortOrder
    sensoryRequirement?: SortOrder
    securityClearanceRequirement?: SortOrder
    responsibilities?: SortOrder
    industry?: SortOrder
    occupationalCategory?: SortOrder
    specialCommitments?: SortOrder
    incentives?: SortOrder
    incentiveCompensation?: SortOrder
    benefits?: SortOrder
    jobBenefits?: SortOrder
    applyUrl?: SortOrder
    applicationContact?: SortOrder
    applicationDeadline?: SortOrder
    directApply?: SortOrder
    category?: SortOrder
    seniority?: SortOrder
    isActive?: SortOrder
    whoShouldApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    identifier?: SortOrder
    jobId?: SortOrder
    slug?: SortOrder
    datePosted?: SortOrder
    validThrough?: SortOrder
    dateModified?: SortOrder
    companyId?: SortOrder
    hiringOrgName?: SortOrder
    hiringOrgUrl?: SortOrder
    hiringOrgLogo?: SortOrder
    hiringOrgSameAs?: SortOrder
    streetAddress?: SortOrder
    addressLocality?: SortOrder
    addressRegion?: SortOrder
    postalCode?: SortOrder
    addressCountry?: SortOrder
    jobLocationType?: SortOrder
    applicantLocationRequirements?: SortOrder
    employmentType?: SortOrder
    workHours?: SortOrder
    jobStartDate?: SortOrder
    jobDuration?: SortOrder
    jobImmediateStart?: SortOrder
    totalJobOpenings?: SortOrder
    employmentUnit?: SortOrder
    salaryValue?: SortOrder
    baseSalary?: SortOrder
    salaryCurrency?: SortOrder
    salaryUnitText?: SortOrder
    estimatedSalary?: SortOrder
    educationRequirements?: SortOrder
    experienceRequirements?: SortOrder
    experienceInPlaceOfEducation?: SortOrder
    qualifications?: SortOrder
    skills?: SortOrder
    physicalRequirement?: SortOrder
    sensoryRequirement?: SortOrder
    securityClearanceRequirement?: SortOrder
    responsibilities?: SortOrder
    industry?: SortOrder
    occupationalCategory?: SortOrder
    specialCommitments?: SortOrder
    incentives?: SortOrder
    incentiveCompensation?: SortOrder
    benefits?: SortOrder
    jobBenefits?: SortOrder
    applyUrl?: SortOrder
    applicationContact?: SortOrder
    applicationDeadline?: SortOrder
    directApply?: SortOrder
    category?: SortOrder
    seniority?: SortOrder
    isActive?: SortOrder
    whoShouldApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    totalJobOpenings?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type JobCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCompanyInput | JobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCompanyInput | JobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCompanyInput | JobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCompanyInput | JobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCompanyInput | JobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCompanyInput | JobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutJobsInput = {
    create?: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneWithoutJobsNestedInput = {
    create?: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput
    upsert?: CompanyUpsertWithoutJobsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJobsInput, CompanyUpdateWithoutJobsInput>, CompanyUncheckedUpdateWithoutJobsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type JobCreateWithoutCompanyInput = {
    title: string
    description?: string | null
    identifier?: string | null
    jobId?: string | null
    slug: string
    datePosted?: string | null
    validThrough?: string | null
    dateModified?: string | null
    hiringOrgName?: string | null
    hiringOrgUrl?: string | null
    hiringOrgLogo?: string | null
    hiringOrgSameAs?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    jobLocationType?: string | null
    applicantLocationRequirements?: string | null
    employmentType?: string | null
    workHours?: string | null
    jobStartDate?: string | null
    jobDuration?: string | null
    jobImmediateStart?: boolean | null
    totalJobOpenings?: number | null
    employmentUnit?: string | null
    salaryValue?: string | null
    baseSalary?: string | null
    salaryCurrency?: string | null
    salaryUnitText?: string | null
    estimatedSalary?: string | null
    educationRequirements?: string | null
    experienceRequirements?: string | null
    experienceInPlaceOfEducation?: boolean | null
    qualifications?: string | null
    skills?: string | null
    physicalRequirement?: string | null
    sensoryRequirement?: string | null
    securityClearanceRequirement?: string | null
    responsibilities?: string | null
    industry?: string | null
    occupationalCategory?: string | null
    specialCommitments?: string | null
    incentives?: string | null
    incentiveCompensation?: string | null
    benefits?: string | null
    jobBenefits?: string | null
    applyUrl?: string | null
    applicationContact?: string | null
    applicationDeadline?: string | null
    directApply?: boolean | null
    category?: string | null
    seniority?: string | null
    isActive?: boolean
    whoShouldApply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUncheckedCreateWithoutCompanyInput = {
    id?: number
    title: string
    description?: string | null
    identifier?: string | null
    jobId?: string | null
    slug: string
    datePosted?: string | null
    validThrough?: string | null
    dateModified?: string | null
    hiringOrgName?: string | null
    hiringOrgUrl?: string | null
    hiringOrgLogo?: string | null
    hiringOrgSameAs?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    jobLocationType?: string | null
    applicantLocationRequirements?: string | null
    employmentType?: string | null
    workHours?: string | null
    jobStartDate?: string | null
    jobDuration?: string | null
    jobImmediateStart?: boolean | null
    totalJobOpenings?: number | null
    employmentUnit?: string | null
    salaryValue?: string | null
    baseSalary?: string | null
    salaryCurrency?: string | null
    salaryUnitText?: string | null
    estimatedSalary?: string | null
    educationRequirements?: string | null
    experienceRequirements?: string | null
    experienceInPlaceOfEducation?: boolean | null
    qualifications?: string | null
    skills?: string | null
    physicalRequirement?: string | null
    sensoryRequirement?: string | null
    securityClearanceRequirement?: string | null
    responsibilities?: string | null
    industry?: string | null
    occupationalCategory?: string | null
    specialCommitments?: string | null
    incentives?: string | null
    incentiveCompensation?: string | null
    benefits?: string | null
    jobBenefits?: string | null
    applyUrl?: string | null
    applicationContact?: string | null
    applicationDeadline?: string | null
    directApply?: boolean | null
    category?: string | null
    seniority?: string | null
    isActive?: boolean
    whoShouldApply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutCompanyInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
  }

  export type JobCreateManyCompanyInputEnvelope = {
    data: JobCreateManyCompanyInput | JobCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutCompanyInput, JobUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
  }

  export type JobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutCompanyInput, JobUncheckedUpdateWithoutCompanyInput>
  }

  export type JobUpdateManyWithWhereWithoutCompanyInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringNullableFilter<"Job"> | string | null
    identifier?: StringNullableFilter<"Job"> | string | null
    jobId?: StringNullableFilter<"Job"> | string | null
    slug?: StringFilter<"Job"> | string
    datePosted?: StringNullableFilter<"Job"> | string | null
    validThrough?: StringNullableFilter<"Job"> | string | null
    dateModified?: StringNullableFilter<"Job"> | string | null
    companyId?: IntNullableFilter<"Job"> | number | null
    hiringOrgName?: StringNullableFilter<"Job"> | string | null
    hiringOrgUrl?: StringNullableFilter<"Job"> | string | null
    hiringOrgLogo?: StringNullableFilter<"Job"> | string | null
    hiringOrgSameAs?: StringNullableFilter<"Job"> | string | null
    streetAddress?: StringNullableFilter<"Job"> | string | null
    addressLocality?: StringNullableFilter<"Job"> | string | null
    addressRegion?: StringNullableFilter<"Job"> | string | null
    postalCode?: StringNullableFilter<"Job"> | string | null
    addressCountry?: StringNullableFilter<"Job"> | string | null
    jobLocationType?: StringNullableFilter<"Job"> | string | null
    applicantLocationRequirements?: StringNullableFilter<"Job"> | string | null
    employmentType?: StringNullableFilter<"Job"> | string | null
    workHours?: StringNullableFilter<"Job"> | string | null
    jobStartDate?: StringNullableFilter<"Job"> | string | null
    jobDuration?: StringNullableFilter<"Job"> | string | null
    jobImmediateStart?: BoolNullableFilter<"Job"> | boolean | null
    totalJobOpenings?: IntNullableFilter<"Job"> | number | null
    employmentUnit?: StringNullableFilter<"Job"> | string | null
    salaryValue?: StringNullableFilter<"Job"> | string | null
    baseSalary?: StringNullableFilter<"Job"> | string | null
    salaryCurrency?: StringNullableFilter<"Job"> | string | null
    salaryUnitText?: StringNullableFilter<"Job"> | string | null
    estimatedSalary?: StringNullableFilter<"Job"> | string | null
    educationRequirements?: StringNullableFilter<"Job"> | string | null
    experienceRequirements?: StringNullableFilter<"Job"> | string | null
    experienceInPlaceOfEducation?: BoolNullableFilter<"Job"> | boolean | null
    qualifications?: StringNullableFilter<"Job"> | string | null
    skills?: StringNullableFilter<"Job"> | string | null
    physicalRequirement?: StringNullableFilter<"Job"> | string | null
    sensoryRequirement?: StringNullableFilter<"Job"> | string | null
    securityClearanceRequirement?: StringNullableFilter<"Job"> | string | null
    responsibilities?: StringNullableFilter<"Job"> | string | null
    industry?: StringNullableFilter<"Job"> | string | null
    occupationalCategory?: StringNullableFilter<"Job"> | string | null
    specialCommitments?: StringNullableFilter<"Job"> | string | null
    incentives?: StringNullableFilter<"Job"> | string | null
    incentiveCompensation?: StringNullableFilter<"Job"> | string | null
    benefits?: StringNullableFilter<"Job"> | string | null
    jobBenefits?: StringNullableFilter<"Job"> | string | null
    applyUrl?: StringNullableFilter<"Job"> | string | null
    applicationContact?: StringNullableFilter<"Job"> | string | null
    applicationDeadline?: StringNullableFilter<"Job"> | string | null
    directApply?: BoolNullableFilter<"Job"> | boolean | null
    category?: StringNullableFilter<"Job"> | string | null
    seniority?: StringNullableFilter<"Job"> | string | null
    isActive?: BoolFilter<"Job"> | boolean
    whoShouldApply?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type CompanyCreateWithoutJobsInput = {
    name: string
    legalName?: string | null
    url?: string | null
    description?: string | null
    logo?: string | null
    image?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    telephone?: string | null
    email?: string | null
    contactType?: string | null
    areaServed?: string | null
    availableLanguage?: string | null
    sameAs?: string | null
    taxID?: string | null
    vatID?: string | null
    duns?: string | null
    leiCode?: string | null
    iso6523Code?: string | null
    foundingDate?: string | null
    foundingLocation?: string | null
    numberOfEmployees?: string | null
    parentOrganization?: string | null
    subOrganization?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutJobsInput = {
    id?: number
    name: string
    legalName?: string | null
    url?: string | null
    description?: string | null
    logo?: string | null
    image?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    telephone?: string | null
    email?: string | null
    contactType?: string | null
    areaServed?: string | null
    availableLanguage?: string | null
    sameAs?: string | null
    taxID?: string | null
    vatID?: string | null
    duns?: string | null
    leiCode?: string | null
    iso6523Code?: string | null
    foundingDate?: string | null
    foundingLocation?: string | null
    numberOfEmployees?: string | null
    parentOrganization?: string | null
    subOrganization?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutJobsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
  }

  export type CompanyUpsertWithoutJobsInput = {
    update: XOR<CompanyUpdateWithoutJobsInput, CompanyUncheckedUpdateWithoutJobsInput>
    create: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutJobsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutJobsInput, CompanyUncheckedUpdateWithoutJobsInput>
  }

  export type CompanyUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: NullableStringFieldUpdateOperationsInput | string | null
    areaServed?: NullableStringFieldUpdateOperationsInput | string | null
    availableLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    sameAs?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    vatID?: NullableStringFieldUpdateOperationsInput | string | null
    duns?: NullableStringFieldUpdateOperationsInput | string | null
    leiCode?: NullableStringFieldUpdateOperationsInput | string | null
    iso6523Code?: NullableStringFieldUpdateOperationsInput | string | null
    foundingDate?: NullableStringFieldUpdateOperationsInput | string | null
    foundingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableStringFieldUpdateOperationsInput | string | null
    parentOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    subOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: NullableStringFieldUpdateOperationsInput | string | null
    areaServed?: NullableStringFieldUpdateOperationsInput | string | null
    availableLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    sameAs?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    vatID?: NullableStringFieldUpdateOperationsInput | string | null
    duns?: NullableStringFieldUpdateOperationsInput | string | null
    leiCode?: NullableStringFieldUpdateOperationsInput | string | null
    iso6523Code?: NullableStringFieldUpdateOperationsInput | string | null
    foundingDate?: NullableStringFieldUpdateOperationsInput | string | null
    foundingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableStringFieldUpdateOperationsInput | string | null
    parentOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    subOrganization?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyCompanyInput = {
    id?: number
    title: string
    description?: string | null
    identifier?: string | null
    jobId?: string | null
    slug: string
    datePosted?: string | null
    validThrough?: string | null
    dateModified?: string | null
    hiringOrgName?: string | null
    hiringOrgUrl?: string | null
    hiringOrgLogo?: string | null
    hiringOrgSameAs?: string | null
    streetAddress?: string | null
    addressLocality?: string | null
    addressRegion?: string | null
    postalCode?: string | null
    addressCountry?: string | null
    jobLocationType?: string | null
    applicantLocationRequirements?: string | null
    employmentType?: string | null
    workHours?: string | null
    jobStartDate?: string | null
    jobDuration?: string | null
    jobImmediateStart?: boolean | null
    totalJobOpenings?: number | null
    employmentUnit?: string | null
    salaryValue?: string | null
    baseSalary?: string | null
    salaryCurrency?: string | null
    salaryUnitText?: string | null
    estimatedSalary?: string | null
    educationRequirements?: string | null
    experienceRequirements?: string | null
    experienceInPlaceOfEducation?: boolean | null
    qualifications?: string | null
    skills?: string | null
    physicalRequirement?: string | null
    sensoryRequirement?: string | null
    securityClearanceRequirement?: string | null
    responsibilities?: string | null
    industry?: string | null
    occupationalCategory?: string | null
    specialCommitments?: string | null
    incentives?: string | null
    incentiveCompensation?: string | null
    benefits?: string | null
    jobBenefits?: string | null
    applyUrl?: string | null
    applicationContact?: string | null
    applicationDeadline?: string | null
    directApply?: boolean | null
    category?: string | null
    seniority?: string | null
    isActive?: boolean
    whoShouldApply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    datePosted?: NullableStringFieldUpdateOperationsInput | string | null
    validThrough?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgLogo?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgSameAs?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    jobLocationType?: NullableStringFieldUpdateOperationsInput | string | null
    applicantLocationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    workHours?: NullableStringFieldUpdateOperationsInput | string | null
    jobStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    jobDuration?: NullableStringFieldUpdateOperationsInput | string | null
    jobImmediateStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalJobOpenings?: NullableIntFieldUpdateOperationsInput | number | null
    employmentUnit?: NullableStringFieldUpdateOperationsInput | string | null
    salaryValue?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableStringFieldUpdateOperationsInput | string | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryUnitText?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    educationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceInPlaceOfEducation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    physicalRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    sensoryRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    securityClearanceRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    occupationalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialCommitments?: NullableStringFieldUpdateOperationsInput | string | null
    incentives?: NullableStringFieldUpdateOperationsInput | string | null
    incentiveCompensation?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    jobBenefits?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationContact?: NullableStringFieldUpdateOperationsInput | string | null
    applicationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    directApply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    seniority?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    whoShouldApply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    datePosted?: NullableStringFieldUpdateOperationsInput | string | null
    validThrough?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgLogo?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgSameAs?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    jobLocationType?: NullableStringFieldUpdateOperationsInput | string | null
    applicantLocationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    workHours?: NullableStringFieldUpdateOperationsInput | string | null
    jobStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    jobDuration?: NullableStringFieldUpdateOperationsInput | string | null
    jobImmediateStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalJobOpenings?: NullableIntFieldUpdateOperationsInput | number | null
    employmentUnit?: NullableStringFieldUpdateOperationsInput | string | null
    salaryValue?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableStringFieldUpdateOperationsInput | string | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryUnitText?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    educationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceInPlaceOfEducation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    physicalRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    sensoryRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    securityClearanceRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    occupationalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialCommitments?: NullableStringFieldUpdateOperationsInput | string | null
    incentives?: NullableStringFieldUpdateOperationsInput | string | null
    incentiveCompensation?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    jobBenefits?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationContact?: NullableStringFieldUpdateOperationsInput | string | null
    applicationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    directApply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    seniority?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    whoShouldApply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    datePosted?: NullableStringFieldUpdateOperationsInput | string | null
    validThrough?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgLogo?: NullableStringFieldUpdateOperationsInput | string | null
    hiringOrgSameAs?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    addressLocality?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: NullableStringFieldUpdateOperationsInput | string | null
    jobLocationType?: NullableStringFieldUpdateOperationsInput | string | null
    applicantLocationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    workHours?: NullableStringFieldUpdateOperationsInput | string | null
    jobStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    jobDuration?: NullableStringFieldUpdateOperationsInput | string | null
    jobImmediateStart?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalJobOpenings?: NullableIntFieldUpdateOperationsInput | number | null
    employmentUnit?: NullableStringFieldUpdateOperationsInput | string | null
    salaryValue?: NullableStringFieldUpdateOperationsInput | string | null
    baseSalary?: NullableStringFieldUpdateOperationsInput | string | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryUnitText?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    educationRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    experienceInPlaceOfEducation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    physicalRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    sensoryRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    securityClearanceRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    occupationalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialCommitments?: NullableStringFieldUpdateOperationsInput | string | null
    incentives?: NullableStringFieldUpdateOperationsInput | string | null
    incentiveCompensation?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    jobBenefits?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationContact?: NullableStringFieldUpdateOperationsInput | string | null
    applicationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    directApply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    seniority?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    whoShouldApply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
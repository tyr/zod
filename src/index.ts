/* ZOD */

import { ZodString, ZodStringDef } from './types/string';
import { ZodNumber, ZodNumberDef } from './types/number';
import { ZodBigInt, ZodBigIntDef } from './types/bigint';
import { ZodBoolean, ZodBooleanDef } from './types/boolean';
import { ZodDate, ZodDateDef } from './types/date';
import { ZodUndefined, ZodUndefinedDef } from './types/undefined';
import { ZodNull, ZodNullDef } from './types/null';
import { ZodArray, ZodArrayDef } from './types/array';
import { ZodObject, ZodObjectDef } from './types/object';
import { ZodUnion, ZodUnionDef } from './types/union';
import { ZodIntersection, ZodIntersectionDef } from './types/intersection';
import { ZodTuple, ZodTupleDef } from './types/tuple';
import { ZodRecord, ZodRecordDef } from './types/record';
import { ZodFunction } from './types/function';
import { ZodLazy, ZodLazyDef } from './types/lazy';
import { ZodLiteral, ZodLiteralDef } from './types/literal';
import { ZodEnum, ZodEnumDef } from './types/enum';
import { ZodPromise, ZodPromiseDef } from './types/promise';
import { TypeOf, ZodType, ZodAny } from './types/base';
import { ZodError } from './ZodError';
// import { ZodLazyObject, ZodLazyObjectDef } from './types/lazyobject';

type ZodDef =
  | ZodStringDef
  | ZodNumberDef
  | ZodBigIntDef
  | ZodBooleanDef
  | ZodDateDef
  | ZodUndefinedDef
  | ZodNullDef
  | ZodArrayDef
  | ZodObjectDef
  | ZodUnionDef
  | ZodIntersectionDef
  | ZodTupleDef
  | ZodRecordDef
  // | ZodFunctionDef
  | ZodLazyDef
  //  | ZodLazyObjectDef
  | ZodLiteralDef
  | ZodEnumDef
  | ZodPromiseDef;

const stringType = ZodString.create;
const numberType = ZodNumber.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const unionType = ZodUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
// const lazyobjectType = ZodLazyObject.create;
// const recursionType = ZodObject.recursion;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const promiseType = ZodPromise.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();

// const stringRecord = <T extends ZodAny>(x:T)=>recordType(stringType(),x);
// const stringMap = stringRecord(objectType({asf:stringType()}))
// const stringMap2 = recordType(stringType(),objectType({ asf: stringType() }));

export {
  stringType as string,
  numberType as number,
  bigIntType as bigint,
  booleanType as boolean,
  dateType as date,
  undefinedType as undefined,
  nullType as null,
  arrayType as array,
  objectType as object,
  unionType as union,
  intersectionType as intersection,
  tupleType as tuple,
  recordType as record,
  functionType as function,
  lazyType as lazy,
  // lazyobjectType as lazyobject,
  // recursionType as recursion,
  literalType as literal,
  enumType as enum,
  promiseType as promise,
  ostring,
  onumber,
  oboolean,
};

export {
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodUndefined,
  ZodNull,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodFunction,
  ZodLazy,
  // ZodLazyObject,
  ZodLiteral,
  ZodEnum,
  ZodPromise,
  ZodType,
  ZodAny,
  ZodDef,
  ZodError,
};

export { TypeOf, TypeOf as infer };

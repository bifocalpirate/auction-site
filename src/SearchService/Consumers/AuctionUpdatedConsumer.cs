using System;
using AutoMapper;
using Contracts;
using MassTransit;
using SearchService.Models;

namespace SearchService.Consumers;

public class AuctionUpdatedConsumer : IConsumer<AuctionUpdated>
{
    private readonly IMapper _mapper;

    public AuctionUpdatedConsumer(IMapper mapper)
    {
        _mapper = mapper;
    }
    public Task Consume(ConsumeContext<AuctionUpdated> context)
    {
        Console.WriteLine("--> Consuming AuctionUpdated " + context.Message.Id);
        var item = _mapper.Map<Item>(context.Message);
    }
}

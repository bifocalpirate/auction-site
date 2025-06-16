using System;
using AutoMapper;
using Contracts;
using MassTransit;

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
        throw new NotImplementedException();
    }
}
